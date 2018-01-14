export default {
	user : {
		firstname : "Laetitia",
		lastname : "Macoine",
		isMale : false,
		birthDate : new Date(Date.now() - 26374837),
		birthLocation : "Paris",
		antecedentsHereditaires : "Rien !"
	},

	allergenes : [
		{
			nameAllergene: "Penicilline",
			dateDiscovered : Date.now() - 1000 * 60 * 60 * 24 * 10,
			comments : "Très sensible !!!!",
			docteur : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			}
		},{
			nameAllergene: "Arachide",
			dateDiscovered : Date.now() - 1000 * 60 * 60 * 24 * 15,
			comments : "Ok avec Nutella, mais cacahuète pure à éviter",
			docteur : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			}
		}
	],

	antecedents : [
		{
			name : "Asthme",
			dateDiscovered : new Date(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365.25 * 3)),
			docteur : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			etablissement : {
				name : "Hôpital Cochin",
				email : "contact@aphp.fr",
				adress : "20 allée St Jacques",
				phone : "+33122846284"
			},
			docteurEmergency : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			}
		}
	],

	examens : [
		{
			date : new Date(Date.now() - 1000 * 60 * 60 * 24 * 31),
			age : "6 mois",
			taille : "60 cm",
			poids : "8 kg",
			perimetreCranien : "41 cm",
			observations : "Bon développement",
			docteur : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			}
		}
	],

	vaccinsObl : [
		{
			name : "B.C.G.",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "33KDK33L2",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Dipthérie, Tétanos",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "53K98733L2",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Poliomyélite",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "E676213L2",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Coqueluche",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "E439745020",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Haemophilus Influenzae b",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "Z875K33882",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Hépatite B",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "R875K97882",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Pneumocoque",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "H548759884",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},
		{
			name : "Rougeole, Oreillons, Rubéole",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "Y548R75684",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Méningocoque C",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "P54C759824",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Papillomavirus Humains",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "XR5487594",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},{
			name : "Grippe",
			date : new Date(Date.now() - 1000 * 3600 * 24 * 31 * 2),
			numberLot : "AC5687468",
			doctor : {
				fullname : "Dr Patch Adams",
				email : "patch@adams.io",
				address : "Somewhere in Minessotta",
				phone : "+336939395849"
			},
			observations : "Ras"
		},
		// ....
	]
};