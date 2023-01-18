import React, {useState} from 'react';
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
import {useParams} from "react-router-dom";

const Character = () => {
    const [listpic, setListpic] = useState(
        [
            {
                img: ryu,
                name: "Ryu",
                desc: "Ryu, le rival et ami de longue date de Ken et l'icône de toute la franchise.\n" +
                    "\n" +
                    "Il reste un personnage polyvalent, avec des pokes, des anti airs et des normales de pression très efficaces. Les choses qui le rendent pire que Ken sont plutôt rares, mais significatives - Ryu n'a pas de super avec le même amalgame d'utilité, de portée et d'abondance de sources que le Sa3 de Ken, avec son meilleur super pour les confirmations qui n'est pas aussi rapide et qui a une incohérence dépendante du personnage dans les combos. Ryu n'a pas non plus d'aussi bons dégâts sans compteur que Ken, en raison de son absence de liens double dp. Ryu a également une moins bonne mobilité, avec une vitesse de marche plus lente, un backdash plus court et l'absence d'un bon air ex tatsu. Ryu, cependant, a ses propres moyens de compenser ses faiblesses, avec des dégâts très élevés en utilisant les mouvements EX, des dégâts stun un peu plus élevés, un super utile et puissant en sa3 (qui sacrifie l'accès aux mouvements ex) et un bien meilleur tatsu pour les confirmations.\n" +
                    "\n"
            },
            {
                img: ken,
                name: "Ken",
                desc: "Après s'être rangé dans la vie de couple pendant quelques années, Ken s'est inscrit au troisième tournoi de Street Fighter. C'est un artiste martial américain qui s'entraîne pour suivre son vieil ami/rival Ryu.\n" +
                    "\n" +
                    "Ken n'a pas besoin d'être présenté, c'est l'un des personnages de jeux de combat les plus célèbres de tous les temps, et (apparemment) le shoto le plus populaire des deux originaux. C'est l'un des meilleurs personnages du jeu, principalement pour ses dégâts sans compteur incroyablement élevés sur les coups perdus et ses excellents pokes, l'un des meilleurs anti airs du jeu et l'un des meilleurs supers dans SA3.\n" +
                    "\n"
            },
            {
                img: chunli,
                name: "Chun-li",
                desc: "Dans son incarnation la plus connue, Chun-Li est une bête défensive. Elle s'appuie principalement sur la punition des adversaires grâce à sa vitesse et sa portée élevées, sa solide puissance et son deuxième super-art qui peut être combiné de multiples façons."
            },
            {
                img: makotoart,
                name: "Makoto",
                desc: "Makoto est très unique, et l'est encore à ce jour, en tant que premier personnage féminin de jeu de combat à être assez lent et percutant avec autant d'endurance que les hommes moyens (comme Ryu et Ken), alors que toutes les autres combattantes avant elle se sont toujours concentrées sur la vitesse et avaient toujours nettement moins d'endurance. Bien que sa vitesse de marche normale soit incroyablement lente, elle possède le meilleur dash avant du jeu, ainsi qu'une priorité élevée et une attaque oppressante. Son meilleur outil est cependant le Karakusa, un command grab unique qui peut être combinée, ce qui permet d'infliger des dégâts dévastateurs et, globalement, un style de combat offensif très dangereux et frustrant."
            },
            {
                img: elena,
                name: "Elena",
                desc: "Elena est un personnage de rushdown et de poking de moyenne portée spécialisé dans les combinaisons de mouvements EX, son plan de jeu principal est un footsie de fuite et une contre-défense anti-aérienne pour gagner du stock pour un mouvement EX offensif et un plan de rush charnu."
            },
            {
                img: ibuki,
                name: "Ibuki",
                desc: "Une aspirante ninja dont le combat dans le tournoi fait partie de son examen final. Elle est très rapide et agile."
            },
            {
                img: dudley,
                name: "Dudley",
                desc: "Dudley est un personnage rapide, fort et très précis, avec des jongles variés, des mixups puissants et une capacité de lockdown, ainsi que de multiples anti-airs différents. En tant que roi du rushdown, son principal problème est sa difficulté à gérer lui-même les attaques fortes."
            },
            {
                img: gouki,
                name: "Gouki",
                desc: "Akuma porte généralement un gi de couleur sombre avec les manches enlevées (similaire à Ken et Ryu) ; il est souvent bleu, noir ou gris, mais varie selon la série ou l'illustration. Il a des cheveux roux avec un topknot, des dents pointues et acérées, et est souvent pieds nus, bien que dans certains jeux il porte des sandales. Selon le jeu ou l'œuvre d'art, il porte soit une ceinture noire à la taille, soit une corde. Sur ses mains, il porte des gantelets d'entraînement bruns ou s'entoure également d'une corde (là encore, cela dépend de la source). Il a la peau bronzée et les yeux cramoisis, et porte les perles de prière de son défunt maître Goutetsu autour du cou, avec un kanji noir visible heaven (天, dix) sur la perle centrale dans certains jeux vidéo. Dans Street Fighter Alpha : Generations, on le voit avoir des sourcils quand il était jeune.        "
            },
            {
                img: hugo,
                name: "Hugo",
                desc: "Hugo est le grappler lee plus direct de 3rd Strike, encore plus qu'Alex, et en tant que tel, il faut une patience exceptionnelle pour le jouer."
            },
            {
                img: sean,
                name: "Sean",
                desc: "Sean Matsuda est d'origine brésilienne, il apprend le karaté Ansatsuken auprès de son maître Ken Masters. Bien qu'il soit très doué, il est encore très loin du niveau de son maître. Ses coups sont légèrement différents de ceux de Ryu et de Ken. Il utilise même parfois un ballon de basketball combiné à une boule de feu.\n" +
                    "\n" +
                    "Au début du développement de Street Fighter III: New Generation, Sean était censé être le combattant shotokan/ansatsuken du jeu et remplacer Ryu et Ken, qui ne devaient pas apparaitre Ces derniers furent ajoutés au dernier moment dans la version Bêta quand Capcom réalisa que le jeu ne pouvait pas se passer des personnages principaux de la saga sans se condamner à un échec des ventes.\n" +
                    "\n" +
                    "Sa sœur ainée, Laura, apparaît pour la première fois dans Street Fighter V."
            },
            {
                img: twelve,
                name: "Twelve",
                desc: "Twelve (トゥエルブ?) est un humanoïde gélatineux de couleur blanche qui peut changer de forme, il peut transformer ses mains en lame ou peut se transformer en Ptéranodon pour certains combos, et il peut notamment copier la forme de ses adversaires.\n" +
                    "\n" +
                    "Twelve est le résultat ultime du «G-Project» de l'organisation de Gill, une opération de guerre biologique dirigée par le Dr Kure et supervisé par Urien, le frère de Gill. Création génétiquement mimétique, Twelve est en mesure de copier l'apparence des autres et de changer la forme de n'importe quelle partie de son corps pour s'adapter à la tâche à accomplir. Il est également extrêmement résistant aux dommages et obéissant servilement, ce qui fait de lui le soldat parfait. Une fois Twelve déclaré comme un succès, la production de masse a commencé, et l'original a été envoyé en mission spéciale : retrouver et récupérer Necro, le prototype original du G-projet, et Effie, la petite-amie de ce dernier, qui l'a libéré de laboratoire. Twelve parvient à battre Necro, mais ce dernier se fait secourir par Effie avant que Twelve ne l'achève. Twelve les a laissés partir, car il a ressenti de la compassion : l'imperfection du soldat autrement parfait.\n" +
                    "\n" +
                    "Dans sa fin, le Dr Kure se moque de lui car il ne peut pas rêver, et Twelve le regarde avec une grande colère."
            },
            {
                img: necro,
                name: "Necro",
                desc: "Né dans un petit village en Russie sur le bord d'un lac, Necro a deux frères plus âgés et une plus jeune sœur. Il quitte la froide campagne pour vivre sous les lumières étincelantes de Moscou, où il rejoint le syndicat du crime de Gill. Il est génétiquement modifié en une impitoyable machine à tuer dotée d'une super souplesse inhumaine. Ses techniques de combat sont générées par un ordinateur et empreint dans son cerveau utilisant la cyber technologie."
            },
            {
                img: urien,
                name: "Urien",
                desc: "Urien (ユリ アン?) est le frère cadet de Gill et a tenté de revendiquer le titre de chef de la Secte Illuminati. Mais c'est Gill qui fut choisi. Depuis, Urien aspire à le renverser en créant sa propre armée : c'est le G-projet. Il enlève l'un des enfants dont Chun-Li s'occupe, afin qu'elle puisse reprendre les combats.\n" +
                    "\n" +
                    "Ce qui lui est arrivé après Street Fighter III: 3rd Strike - Fight for the Future est assez méconnu. On découvre dans sa fin de Capcom Fighting Evolution qu'il a réussi à créer une armée de clones de Twelve à son image, ce qui accrédite la thèse de la réussite du G-Project.\n" +
                    "\n" +
                    "Urien revient dans Street Fighter V ou il est vice-président d'Illuminati et cherche a anéantir Shadoloo pour conquérir le monde a sa place. C'est d'ailleurs le seul jeu ou il porte un uniforme d'homme d'affaires."
            },
            {
                img: yun,
                name: "Yun",
                desc: "Yun et Yang sont des frères jumeaux originaires de Hong-Kong et pratiquant le Kenpō, et se trouvent être les neveux de Lee, du premier opus. Ils sont à la recherche de la légendaire star de cinéma Fei Long, et nourrissent l'espoir de devenir des stars de cinéma, célèbres dans leur propre ville natale. Ils ont des ennuis avec Dee Jay (qui, par hasard, sait comment s'associer avec Fei Long), se sont battus contre lui et ont remporté le combat. Yun a également entendu des rumeurs selon lesquelles Fei Long travaillerait avec des trafiquants de drogue (qui s'avèrent être Shadaloo). Mais Dee Jay sait qu'il est suffisamment fort pour s'associer à ce genre de personnes et il dit à Yang et Yun où ils devaient trouver celui-ci. Après avoir pris congé et trouvé Fei-Long, ils se sont battus pour connaître la vérité sur lui. Après que les frères l'ont emporté, Fei Long leur avoue infiltrer le trafic de drogues pour avoir des informations sur M. Bison. Les frères ont décidé d'aider Fei-Long, craignant que les opérations de Bison ne ruinent leur ville natale, mais se font capturer par Shadaloo. M.Bison leur propose de se joindre à lui, mais ils ont refusé. Après un âpre combat, Yang et Yun sont victorieux, avec l'aide de Fei Long. Pour les remercier, ce dernier a exaucé leur souhait et les a pistonnés dans son prochain film : \"Street King 2 : les 3 Dragons\" , qui fait un carton au box-office.\n" +
                    "\n" +
                    "Les frères ont rejoint le troisième tournoi World Warrior pour montrer leurs compétences. Ils ont ensuite trouvé et combattu Gill, qui a apprécié leurs efforts et leur a accordé la direction de leur ville. Ils ont refusé son offre, car ils se sont battus pour arrêter ses plans et non le rejoindre."
            },
            {
                img: yang,
                name: "Yang",
                desc: "Yun et Yang sont des frères jumeaux originaires de Hong-Kong et pratiquant le Kenpō, et se trouvent être les neveux de Lee, du premier opus. Ils sont à la recherche de la légendaire star de cinéma Fei Long, et nourrissent l'espoir de devenir des stars de cinéma, célèbres dans leur propre ville natale. Ils ont des ennuis avec Dee Jay (qui, par hasard, sait comment s'associer avec Fei Long), se sont battus contre lui et ont remporté le combat. Yun a également entendu des rumeurs selon lesquelles Fei Long travaillerait avec des trafiquants de drogue (qui s'avèrent être Shadaloo). Mais Dee Jay sait qu'il est suffisamment fort pour s'associer à ce genre de personnes et il dit à Yang et Yun où ils devaient trouver celui-ci. Après avoir pris congé et trouvé Fei-Long, ils se sont battus pour connaître la vérité sur lui. Après que les frères l'ont emporté, Fei Long leur avoue infiltrer le trafic de drogues pour avoir des informations sur M. Bison. Les frères ont décidé d'aider Fei-Long, craignant que les opérations de Bison ne ruinent leur ville natale, mais se font capturer par Shadaloo. M.Bison leur propose de se joindre à lui, mais ils ont refusé. Après un âpre combat, Yang et Yun sont victorieux, avec l'aide de Fei Long. Pour les remercier, ce dernier a exaucé leur souhait et les a pistonnés dans son prochain film : \"Street King 2 : les 3 Dragons\" , qui fait un carton au box-office.\n" +
                    "\n" +
                    "Les frères ont rejoint le troisième tournoi World Warrior pour montrer leurs compétences. Ils ont ensuite trouvé et combattu Gill, qui a apprécié leurs efforts et leur a accordé la direction de leur ville. Ils ont refusé son offre, car ils se sont battus pour arrêter ses plans et non le rejoindre."
            },
            {
                img: oro,
                name: "Oro",
                desc: "Oro est né en 1860 au Japon, il est le maître du Senjutsu, et a donc 160 ans au moment du tournoi. Contrairement aux apparences, Il s’est délibérément lié un bras (visible lors des super art ainsi que lors d’une pose de victoire) afin de laisser une petite chance à ses opposants. Il ne s’entraîne plus depuis plusieurs dizaines d’années. Cette aptitude surhumaine de longévité est due à son entraînement. Au début du siècle, Oro était professeur d’arts martiaux et décida d’aller au Brésil avec un ami. Supportant difficilement cette vie il s’éloigna de la civilisation et devint un ermite dans la forêt amazonienne."
            },
            {
                img: gill,
                name: "Gill",
                desc: "Gill est le « boss » de fin de Street Fighter III. Il contrôle le feu et la glace, peut ressusciter et provoquer une onde de choc surpuissante par ses pouvoirs divins.\n" +
                    "\n" +
                    "Son frère est Urien. Il dirige une secte dédiée à sa gloire et projette de répandre sa foi au monde entier en organisant un tournoi de combattants de rue. En battant les hommes les plus forts du monde et en les ralliant à lui, il espère aussi conquérir le monde.\n" +
                    "\n" +
                    "Le personnage fut ainsi créé par Capcom dans l'optique de mettre en evidence le fait que, contrairement aux opus précédents (et suivants) de la franchise, ce jeu-ci ne pratiquait pas le \"sprite mirroring\". Ainsi, lorsque Gill se tourne d'un coté ou de l'autre, on voit instantanément que les couleurs correspondent toujours : les sprites ne sont pas simplement mis à l'envers mais diffèrent selon que le personnage fait face à la gauche ou la droite de l'écran."
            },
            {
                img: q,
                name: "Q",
                desc: "Q est un personnage tout à fait énigmatique tiré de la saga Street Fighter III. C'est une sorte d'androïde vêtu d'un long manteau gris qui semble poursuivie par la police pour d'obscures raisons. Aucune information n'est donnée concernant ses origines ou son but, pas même lors des scènes d'introduction et de fin du personnage. Pour la petite histoire, Q serait inspiré d'un personnage du décor de l'arène de Ken Masters dans Street Fighter II , personnage qui ressemble beaucoup à Q. Cependant, aucune information à propos de ce personnage n'a été validée par Capcom. Néanmoins la ressemblance avec l’androïde K de Robotto Keiji, série des années 1970 créée par Shotaro Ishinomori, est évidente."
            }])

    const [search, setSearch] = useState("");

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
                                <img className="chars-pics" src={char.img} alt={""}/>
                                <p className="descr"> {char.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </section>
        </div>
    );
};
export default Character;