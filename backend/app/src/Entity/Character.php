<?php

namespace App\Entity;

use App\Repository\CharacterRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CharacterRepository::class)]
class Character
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "title is mandatory")]
    #[Assert\Length(min: 1, max: 255, minMessage: "title should have at less {{ limit }} characters", maxMessage: "title can't have more than {{ limit }} characters")]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "concept is mandatory")]
    #[Assert\Length(min: 1, max: 255, minMessage: "concept should have at less {{ limit }} characters", maxMessage: "concept can't have more than {{ limit }} characters")]
    private ?string $concept = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank(message: "description is mandatory")]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $age = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "motivation is mandatory")]
    #[Assert\Length(min: 1, max: 255, minMessage: "motivation should have at less {{ limit }} characters", maxMessage: "motivation can't have more than {{ limit }} characters")]
    private ?string $motivation = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank(message: "quest is mandatory")]
    private ?string $quest = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "place is mandatory")]
    #[Assert\Length(min: 1, max: 255, minMessage: "place should have at less {{ limit }} characters", maxMessage: "place can't have more than {{ limit }} characters")]
    private ?string $place = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: "ether is mandatory")]
    private ?int $ether = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getConcept(): ?string
    {
        return $this->concept;
    }

    public function setConcept(string $concept): static
    {
        $this->concept = $concept;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): static
    {
        $this->age = $age;

        return $this;
    }

    public function getMotivation(): ?string
    {
        return $this->motivation;
    }

    public function setMotivation(string $motivation): static
    {
        $this->motivation = $motivation;

        return $this;
    }

    public function getQuest(): ?string
    {
        return $this->quest;
    }

    public function setQuest(string $quest): static
    {
        $this->quest = $quest;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): static
    {
        $this->place = $place;

        return $this;
    }

    public function getEther(): ?int
    {
        return $this->ether;
    }

    public function setEther(int $ether): static
    {
        $this->ether = $ether;

        return $this;
    }
}
