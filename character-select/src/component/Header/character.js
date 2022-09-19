import React, {useEffect, useState} from 'react';
import makotowalk from "../../img/makotowalk.gif";
import "./character.css";
import ryu from "../../img/ryu.png";
import ken from "../../img/ken.png";
import chunli from "../../img/chunli.png";
import makotoart from "../../img/makotoart.png"
import elena from "../../img/elena.png";
import ibuki from "../../img/ibuki.png";
import dudley from "../../img/dudley.png";
import gill from "../../img/gill.png";
import gouki from "../../img/gouki.png";
import hugo from "../../img/hugo.png";
import necro from "../../img/necro.png";
import q from "../../img/q.png";
import sean from "../../img/sean.png";
import twelve from "../../img/twelve.png";
import urien from "../../img/urien.png";
import yang from "../../img/yang.png";
import yun from "../../img/yun.png";
import oro from "../../img/oro.png";

const Character = () => {
    const [listpic , setListpic] =  useState([{img: ryu, name: "Ryu", desc: "Ryu, le rival et ami de longue date de Ken et l'icône de toute la franchise.\n" +
            "\n" +
            "Il reste un personnage polyvalent, avec des pokes, des anti airs et des normales de pression très efficaces. Les choses qui le rendent pire que Ken sont plutôt rares, mais significatives - Ryu n'a pas de super avec le même amalgame d'utilité, de portée et d'abondance de sources que le Sa3 de Ken, avec son meilleur super pour les confirmations qui n'est pas aussi rapide et qui a une incohérence dépendante du personnage dans les combos. Ryu n'a pas non plus d'aussi bons dégâts sans compteur que Ken, en raison de son absence de liens double dp. Ryu a également une moins bonne mobilité, avec une vitesse de marche plus lente, un backdash plus court et l'absence d'un bon air ex tatsu. Ryu, cependant, a ses propres moyens de compenser ses faiblesses, avec des dégâts très élevés en utilisant les mouvements EX, des dégâts stun un peu plus élevés, un super utile et puissant en sa3 (qui sacrifie l'accès aux mouvements ex) et un bien meilleur tatsu pour les confirmations.\n" +
            "\n"},
        {img:ken , name: "Ken", desc: "Après s'être rangé dans la vie de couple pendant quelques années, Ken s'est inscrit au troisième tournoi de Street Fighter. C'est un artiste martial américain qui s'entraîne pour suivre son vieil ami/rival Ryu.\n" +
                "\n" +
                "Ken n'a pas besoin d'être présenté, c'est l'un des personnages de jeux de combat les plus célèbres de tous les temps, et (apparemment) le shoto le plus populaire des deux originaux. C'est l'un des meilleurs personnages du jeu, principalement pour ses dégâts sans compteur incroyablement élevés sur les coups perdus et ses excellents pokes, l'un des meilleurs anti airs du jeu et l'un des meilleurs supers dans SA3.\n" +
                "\n"},
        {img:chunli , name: "Chun-li", desc: "Dans son incarnation la plus connue, Chun-Li est une bête défensive. Elle s'appuie principalement sur la punition des adversaires grâce à sa vitesse et sa portée élevées, sa solide puissance et son deuxième super-art qui peut être combiné de multiples façons."},
        {img:makotoart , name: "Makoto", desc: "Makoto est très unique, et l'est encore à ce jour, en tant que premier personnage féminin de jeu de combat à être assez lent et percutant avec autant d'endurance que les hommes moyens (comme Ryu et Ken), alors que toutes les autres combattantes avant elle se sont toujours concentrées sur la vitesse et avaient toujours nettement moins d'endurance. Bien que sa vitesse de marche normale soit incroyablement lente, elle possède le meilleur dash avant du jeu, ainsi qu'une priorité élevée et une attaque oppressante. Son meilleur outil est cependant le Karakusa, un command grab unique qui peut être combinée, ce qui permet d'infliger des dégâts dévastateurs et, globalement, un style de combat offensif très dangereux et frustrant."},
        {img:elena , name: "Elena", desc: "Elena est un personnage de rushdown et de poking de moyenne portée spécialisé dans les combinaisons de mouvements EX, son plan de jeu principal est un footsie de fuite et une contre-défense anti-aérienne pour gagner du stock pour un mouvement EX offensif et un plan de rush charnu."},
        {img:ibuki , name: "Ibuki", desc: "Une aspirante ninja dont le combat dans le tournoi fait partie de son examen final. Elle est très rapide et agile."},
        {img:dudley , name: "Dudley", desc: "Dudley est un personnage rapide, fort et très précis, avec des jongles variés, des mixups puissants et une capacité de lockdown, ainsi que de multiples anti-airs différents. En tant que roi du rushdown, son principal problème est sa difficulté à gérer lui-même les attaques fortes."},
        {img:gouki , name: "Gouki", desc: "Akuma porte généralement un gi de couleur sombre avec les manches enlevées (similaire à Ken et Ryu) ; il est souvent bleu, noir ou gris, mais varie selon la série ou l'illustration. Il a des cheveux roux avec un topknot, des dents pointues et acérées, et est souvent pieds nus, bien que dans certains jeux il porte des sandales. Selon le jeu ou l'œuvre d'art, il porte soit une ceinture noire à la taille, soit une corde. Sur ses mains, il porte des gantelets d'entraînement bruns ou s'entoure également d'une corde (là encore, cela dépend de la source). Il a la peau bronzée et les yeux cramoisis, et porte les perles de prière de son défunt maître Goutetsu autour du cou, avec un kanji noir visible heaven (天, dix) sur la perle centrale dans certains jeux vidéo. Dans Street Fighter Alpha : Generations, on le voit avoir des sourcils quand il était jeune.        "},
        {img:hugo , name: "Hugo", desc: "Hugo est le grappler lee plus direct de 3rd Strike, encore plus qu'Alex, et en tant que tel, il faut une patience exceptionnelle pour le jouer."},
        {img:sean , name: "Sean", desc: ""},
        {img:twelve , name: "Twelve", desc: ""},
        {img:necro , name: "Necro", desc: ""},
        {img:urien , name: "Urien", desc: ""},
        {img:yun , name: "Yun", desc: ""},
        {img:yang , name: "Yang", desc: ""},
        {img:oro , name: "Oro", desc: ""},
        {img:gill , name: "Gill", desc: ""},
        {img:q , name: "Q", desc: ""}])

    const [search , setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value)
    }
    console.log(search);

    return (
        <div>
            <div className="recherche">
                Search: <input name="query" type="text" onChange={handleSearch}/>
            </div>
            <section className="chars">
            {listpic.filter((item) =>
                search === "" ? true : item.name.toLowerCase().includes(search.toLowerCase())
            ).map((char) => {
                return (
                   
                        <li className="charac-select">
                            <div className="chars-card">
                                <h2 className="chars-title">
                                    {char.name}
                                </h2>
                                <img className="chars-pics" src={char.img}/>
                                <p> {char.desc}</p>
                            </div>
                        </li>
                   
                )
            })}
            </section>
        </div>
    );
};

export default Character;