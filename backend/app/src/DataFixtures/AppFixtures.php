<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Character;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
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
