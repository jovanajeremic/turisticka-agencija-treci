import react from 'react';
import paris from '../slike/paris.jpeg';
import london from '../slike/london.jpeg';
import belgrade from '../slike/beograd.jpeg';

const podaci = [
    {
        id: 1,
        naziv: "Pariz",
        slika: paris,
        opis: "Pariz je glavni i najveći grad Francuske. Nalazi se na obalama rijeke Sene, u sjevernoj Francuskoj, u središtu regije Île-de-France. Grad je poznat po svojim kafićima, restoranima i buticima. Pariz je grad svjetlosti i mode. Poznat je i po svojim muzejima, među kojima je najpoznatiji Luvr, u kojem se nalazi Mona Liza Leonarda da Vincija. Pariz je također i grad umjetnosti i kulture. U njemu se nalazi veliki broj kazališta, opera i koncerata. Pariz je također i grad ljubavi, a najpoznatiji simbol ljubavi je Eiffelov toranj. Pariz je grad koji se nalazi na popisu svih turista.",
        komentari: [
            {
                id: 1,
                tekst: "Komentar 1",
                ocena: 4,
                autor: "Pera Peric"
            },
            {
                id: 2,
                tekst: "Komentar 2",
                ocena: 5,
                autor: "Mika Mikic"
            },
            {
                id: 3,
                tekst: "Komentar 3",
                ocena: 3,
                autor: "Zika Zikic"
            }
        ]
    },
    {
        id: 2,
        naziv: "London",
        slika: london,
        opis: "London je glavni i najveći grad Engleske i Ujedinjenog Kraljevstva. Grad je smješten na rijeci Temzi u jugoistočnom dijelu otoka Velike Britanije. London je jedan od najvažnijih svjetskih gradova za međunarodno poslovanje, financije, obrazovanje, zabavu, modu, medije, istraživanje i razvoj. U njemu se nalazi veliki broj muzeja, galerija, knjižnica, sportskih događaja i drugih kulturnih institucija. U Londonu se nalazi i najstarije podzemno željezničko postrojenje na svijetu. London je grad koji se nalazi na popisu svih turista.",
        komentari: [
            {
                id: 1,
                tekst: "Komentar 1",
                ocena: 2,
                autor: "Pera Peric"
            },
            {
                id: 2,
                tekst: "Komentar 2",
                ocena: 3,
                autor: "Milena Milenic"
            },
            {
                id: 3,
                tekst: "Komentar 3",
                ocena: 2,
                autor: "Zika Zezalic"
            }
        ]
    },
    {
        id: 3,
        naziv: "Beograd",
        slika: belgrade,
        opis: "Beograd je glavni i najveći grad Srbije. Nalazi se na ušću Save u Dunav. Beograd je jedan od najstarijih gradova u Europi i svijetu. U njemu se nalazi veliki broj muzeja, galerija, knjižnica, sportskih događaja i drugih kulturnih institucija. Beograd je grad koji se nalazi na popisu svih turista.",
        komentari: [
            {
                id: 1,
                tekst: "Komentar 1",
                ocena: 5,
                autor: "Pera Petricc"
            },
            {
                id: 2,
                tekst: "Komentar 2",
                ocena: 5,
                autor: "Ninoslav Milojevic"
            },
            {
                id: 3,
                tekst: "Komentar 3",
                ocena: 4,
                autor: "Dusko Radovic"
            }
        ]
    },
];

export default podaci;