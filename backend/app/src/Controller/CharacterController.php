<?php

namespace App\Controller;

use App\Entity\Character;
use App\Repository\CharacterRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CharacterController extends AbstractController
{
    #[Route('/api/characters', name: 'character', methods: ['GET'])]
    public function getCharachterList(CharacterRepository $characterRepository, SerializerInterface $serializer): JsonResponse
    {
        $characterList = $characterRepository->findAll();
        $jsonCharacterList = $serializer->serialize($characterList, 'json');
        return new JsonResponse($jsonCharacterList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/characters/{id}', name: 'detailCharacter', methods: ['GET'])]
    public function getDetailCharachter(Character $character, SerializerInterface $serializer): JsonResponse
    {
        $jsonCharacter = $serializer->serialize($character, 'json');
        return new JsonResponse($jsonCharacter, Response::HTTP_OK, ['accept' => 'json'], true);
    }

    #[Route('/api/characters/{id}', name: 'deleteCharacter', methods: ['DELETE'])]
    public function deleteCharachter(Character $character, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($character);
        $em->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }

    #[Route('/api/characters', name: 'createCharacter', methods: ['POST'])]
    public function createCharachter(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, UrlGeneratorInterface $urlGenerator, ValidatorInterface $validator): JsonResponse
    {
        $character = $serializer->deserialize($request->getContent(), Character::class, 'json');

        $errors = $validator->validate($character);
        if ($errors->count() > 0) {
            return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
        }

        $em->persist($character);
        $em->flush();

        $jsonCharacter = $serializer->serialize($character, 'json');

        $location = $urlGenerator->generate('detailCharacter', ['id' => $character->getId()], UrlGeneratorInterface::ABSOLUTE_URL);

        return new JsonResponse($jsonCharacter, Response::HTTP_CREATED, ["Location" => $location], true);
    }

    #[Route('/api/characters/{id}', name: 'updateCharacter', methods: ['PUT'])]
    public function updateCharachter(Request $request, SerializerInterface $serializer, Character $currentCharacter, EntityManagerInterface $em): JsonResponse
    {
        $updatedCharacter = $serializer->deserialize(
            $request->getContent(),
            Character::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $currentCharacter]
        );
        $em->persist($updatedCharacter);
        $em->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
