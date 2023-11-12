<?php

namespace App\Controller;

use App\Entity\Character;
use App\Repository\CharacterRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

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
}
