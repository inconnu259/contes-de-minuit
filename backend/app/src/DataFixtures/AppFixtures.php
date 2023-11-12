<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Character;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setUsername("user");
        $user->setEmail("user@contes.com");
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "password"));
        $manager->persist($user);

        $userAdmin = new User();
        $userAdmin->setUsername("admin");
        $userAdmin->setEmail("admin@contes.com");
        $userAdmin->setRoles(["ROLE_ADMIN"]);
        $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "password"));
        $manager->persist($userAdmin);

        $watts = new Character;
        $watts->setName('Watts');
        $watts->setConcept('Professeur chimpanzé');
        $watts->setDescription('manteau qui traine au sol, deerstalker sur la tête, loupe en main, 1m50');
        $watts->setPlace('locataire d\'un petit appart du quartier de l\'université de Carnegie');
        $watts->setMotivation('énigme');
        $watts->setQuest('avant de mourir mystérieusement, son mentor, le prof. Edison Rose, lui a lancé un défi sibyllin: <découvrir l\'heure exacte de Minuit>');
        $watts->setEther(3);
        $manager->persist($watts);

        $bigby = new Character;
        $bigby->setName('Bigby');
        $bigby->setConcept('Dandy Loup-Garou');
        $bigby->setDescription('redingote, costume belle époque, chapeau gibus, épaisses rouflaquettes châtins, 1m90');
        $bigby->setPlace('propriétaire d\'un grand entrepôt dans le quartier du Vieux Port');
        $bigby->setMotivation('emploi');
        $bigby->setQuest('il recherche sa mère disparue et possède, pour seul indice, un médaillon doré gravé d\'une croix entrelacée d\'une rose');
        $bigby->setEther(3);
        $manager->persist($bigby);

        $manager->flush();
    }
}
