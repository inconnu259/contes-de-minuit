<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Character;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
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
