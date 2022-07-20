async function face() {
	await loadmodel();

	$('#desc').html('detecting refimg')
	const labels = ['refimg'];
	
	const labeledFaceDescriptors = await Promise.all(labels.map(async label => {
		// const imgUrl = 'img/ci.jpeg'
		// const img = await faceapi.fetchImage(imgUrl)
		
		// const faceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
		// if (!faceDescription) {
		// 	throw new Error('no faces detected for '+label);
		// }
		// const faceDescriptors = [faceDescription.descriptor]
		// console.log(faceDescriptors.toString());
		
		// mo
		const f32a = [Float32Array.from([-0.14496465027332306,0.0875130221247673,0.0706120952963829,-0.08064176887273788,-0.037940479815006256,-0.026561100035905838,-0.01942436955869198,-0.14873634278774261,0.13053804636001587,-0.07622912526130676,0.29275333881378174,-0.055522605776786804,-0.22682225704193115,-0.16227522492408752,-0.030173318460583687,0.19542402029037476,-0.18386371433734894,-0.11343525350093842,-0.09699396789073944,-0.03775668516755104,0.050035376101732254,-0.07188443839550018,0.06727074831724167,0.056913260370492935,-0.10952376574277878,-0.36937302350997925,-0.07254977524280548,-0.15832799673080444,0.012235629372298717,-0.02565433830022812,-0.08688751608133316,0.033279888331890106,-0.22276870906352997,-0.09420516341924667,-0.01608072966337204,0.02258509024977684,-0.013869614340364933,-0.02172982320189476,0.20249530673027039,-0.06175024434924126,-0.22046560049057007,0.04657860845327377,0.07597966492176056,0.1901041716337204,0.21539485454559326,0.08132015913724899,0.004905391950160265,-0.06192070245742798,0.08752285689115524,-0.18714021146297455,0.09984961897134781,0.1052909791469574,0.12443694472312927,0.009020776487886906,0.09624309837818146,-0.1480468213558197,0.002494547050446272,0.12702183425426483,-0.16336612403392792,0.018570592626929283,0.04756946116685867,-0.10353738069534302,-0.04987157881259918,-0.07407770305871964,0.24818359315395355,0.13170142471790314,-0.12157192081212997,-0.1099243089556694,0.16937732696533203,-0.04760483652353287,0.013271818868815899,0.06391856074333191,-0.17360977828502655,-0.1777748018503189,-0.3034432828426361,0.09118078649044037,0.3487378656864166,0.1410556435585022,-0.2054297775030136,0.014044693671166897,-0.06113306060433388,0.016165172681212425,0.13311202824115753,0.09993090480566025,-0.017219461500644684,-0.043600838631391525,-0.0761139988899231,-0.010408912785351276,0.09195438027381897,-0.025873662903904915,-0.0267096646130085,0.2369852513074875,-0.06283611059188843,0.022481180727481842,-0.03302464634180069,0.012616992928087711,-0.11629540473222733,0.03646550700068474,-0.13802240788936615,-0.006252466235309839,0.06750139594078064,0.04413580894470215,0.012768731452524662,0.10408101975917816,-0.12332073599100113,-0.012341145426034927,-0.04512340947985649,0.03126149997115135,0.004928390495479107,-0.03248368576169014,-0.04328199848532677,-0.06773168593645096,0.05583057925105095,-0.2276850938796997,0.21720348298549652,0.159180149435997,-0.005595067515969276,0.0887627899646759,0.11775438487529755,0.012388976290822029,0.03754256293177605,-0.023718778043985367,-0.24300405383110046,-0.0035614718217402697,0.19030937552452087,-0.06394089013338089,0.11445944011211395,0.008313816972076893])];
		// ay
		// const f32a = [Float32Array.from([-0.1163887158036232,0.03623022884130478,0.0856572687625885,-0.0429496094584465,-0.01464502140879631,-0.10146088898181915,-0.1039743572473526,-0.18740300834178925,0.10712198913097382,-0.09835436940193176,0.2617095410823822,-0.00671606557443738,-0.13436031341552734,-0.14680278301239014,-0.019803596660494804,0.127595454454422,-0.2231309413909912,-0.11210456490516663,-0.07030428200960159,-0.007968036457896233,0.07863783091306686,-0.02018355205655098,0.04822009056806564,0.06541744619607925,-0.0848466008901596,-0.30091115832328796,-0.12904183566570282,-0.1264190524816513,0.0432036891579628,-0.0038458991330116987,-0.09688269346952438,-0.042211052030324936,-0.269875705242157,-0.08987993746995926,-0.02563466690480709,0.09143063426017761,0.05513855814933777,-0.09994082152843475,0.12346035242080688,-0.01042778231203556,-0.1791888177394867,0.06639677286148071,-0.017806928604841232,0.18682612478733063,0.17690503597259521,0.09973365068435669,-0.012251541018486023,-0.1118352860212326,0.11186830699443817,-0.15606826543807983,0.08424105495214462,0.11478214710950851,0.07254858314990997,0.038676634430885315,-0.04271861910820007,-0.1979447454214096,0.07686971873044968,0.06317254155874252,-0.17649710178375244,0.0022119199857115746,0.06671963632106781,-0.08263813704252243,0.015223193913698196,-0.06062687933444977,0.25952374935150146,0.12173870950937271,-0.11991079151630402,-0.1247263178229332,0.15026316046714783,-0.10492170602083206,-0.04642436280846596,-0.007958305068314075,-0.1608089804649353,-0.15564864873886108,-0.3593722879886627,0.05864563211798668,0.4421938359737396,0.12185272574424744,-0.2459246963262558,0.027194499969482422,-0.17888692021369934,0.013197579421103,0.09980366379022598,0.11120405048131943,-0.006625812035053968,0.0645061507821083,-0.13858284056186676,-0.038055602461099625,0.2018517553806305,-0.002316857688128948,-0.02581646665930748,0.26117855310440063,-0.004990553483366966,0.07067781686782837,0.042860567569732666,-0.0025479672476649284,-0.06668365001678467,0.01606455072760582,-0.1414184272289276,0.031034568324685097,-0.01675051636993885,-0.010605650022625923,-0.029543889686465263,0.12118016183376312,-0.1622868776321411,0.09797100722789764,0.05148347094655037,-0.020137229934334755,-0.0012186503736302257,-0.007229767739772797,-0.12464873492717743,-0.11763828992843628,0.10248426347970963,-0.23238734900951385,0.21577034890651703,0.20909397304058075,0.18954025208950043,0.19392812252044678,0.11425431072711945,0.1103094071149826,-0.04680228978395462,-0.013375471346080303,-0.2274169623851776,-0.026287369430065155,0.09620754420757294,-0.017424719408154488,0.09648740291595459,0.09866667538881302])];
		// ci
		// const f32a = [Float32Array.from([-0.0671614408493042,0.03621523082256317,0.05011806637048721,-0.0904274582862854,-0.15659357607364655,-0.03657689690589905,-0.10288021713495255,-0.1317366063594818,0.11955922842025757,-0.19752418994903564,0.18706625699996948,-0.06362451612949371,-0.1228114441037178,-0.06630939990282059,-0.0491536520421505,0.19401954114437103,-0.16770039498806,-0.15522880852222443,-0.07029188424348831,-0.07206592708826065,0.023204540833830833,-0.012820259667932987,-0.021549586206674576,0.038860149681568146,-0.11498677730560303,-0.33159852027893066,-0.04865014925599098,-0.01350982766598463,0.01018517930060625,-0.08394496142864227,-0.1022292748093605,0.08394874632358551,-0.19872930645942688,-0.06025075912475586,0.04914311319589615,0.0981173887848854,0.03264141082763672,-0.03725172206759453,0.13634486496448517,-0.01674034632742405,-0.2593321204185486,0.030947329476475716,0.0827096626162529,0.20830321311950684,0.18629099428653717,0.055249348282814026,-0.035529375076293945,-0.05604640021920204,0.17217561602592468,-0.19104568660259247,-0.0077911727130413055,0.11200812458992004,0.09814856946468353,0.008479409851133823,-0.00870763510465622,-0.1254839450120926,0.008493623696267605,0.13021411001682281,-0.1327977329492569,-0.004551079124212265,0.08010701835155487,-0.14464440941810608,-0.06038717180490494,-0.10992800444364548,0.20739811658859253,0.11131369322538376,-0.09923697263002396,-0.18995702266693115,0.15319876372814178,-0.11778146028518677,-0.06115363538265228,0.005628040060400963,-0.1224941536784172,-0.14735190570354462,-0.28940922021865845,-0.015018723905086517,0.3110146224498749,0.14527522027492523,-0.20118087530136108,0.008831902407109737,-0.019263410940766335,0.06407303363084793,0.10121497511863708,0.09594230353832245,-0.011982038617134094,0.028679996728897095,-0.05365527421236038,-0.02325659990310669,0.203224316239357,-0.024645309895277023,-0.023057883605360985,0.18197868764400482,-0.020926620811223984,0.06083695963025093,-0.005243786610662937,0.023636119440197945,-0.12904971837997437,0.027877699583768845,-0.16680826246738434,-0.0007492111762985587,0.024666359648108482,-0.00918000191450119,0.02469657175242901,0.16734886169433594,-0.16824641823768616,0.14218731224536896,-0.07695487886667252,0.03438597172498703,0.008813207969069481,0.04662948474287987,-0.05031281337141991,-0.09288716316223145,0.08236850053071976,-0.18574777245521545,0.1516357958316803,0.2303958237171173,0.06813261657953262,0.13419438898563385,0.12115735560655594,0.03480330482125282,0.020858177915215492,0.007208317052572966,-0.202195942401886,-0.08386195451021194,0.08213943243026733,-0.09858328104019165,0.06131052225828171,0.015610269270837307])];
		return new faceapi.LabeledFaceDescriptors(label, f32a)
	}));
	
	await runAi(labeledFaceDescriptors);
}
async function loadmodel(){
	$('#desc').html('start loading model')
	const MODEL_URL = './models'

	await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
	await faceapi.loadFaceLandmarkModel(MODEL_URL)
	await faceapi.loadFaceRecognitionModel(MODEL_URL)
	await faceapi.loadFaceExpressionModel(MODEL_URL)
	
	$('#desc').html('finish loading model')
}
async function runAi(m){
	$('#desc').html('start detecting face')
	const img = document.getElementById('originalImg')
	let faceDescriptions = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
	const threshold = 0.39
	const faceMatcher = new faceapi.FaceMatcher(m, threshold)
	if (faceDescriptions) {
		const bm = faceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor))
		if (bm.length>0) {
			if (bm[0]._label=='refimg') {
				$('body').css('background-color','green')
			}else{
				$('body').css('background-color','red')
			}
			fcdsc = faceDescriptions[0].descriptor;
			fcreg = bm;
			$('#matchrate').html(bm.toString())
		}
	}

	const canvas = $('#reflay').get(0)
	faceapi.matchDimensions(canvas, img)
	faceDescriptions = faceapi.resizeResults(faceDescriptions, img)
	faceapi.draw.drawDetections(canvas, faceDescriptions)
	faceapi.draw.drawFaceLandmarks(canvas, faceDescriptions)
	faceapi.draw.drawFaceExpressions(canvas, faceDescriptions)
	$('#desc').html('finish detecting face')

	await setTimeout(async () => await this.runAi(m),90)
}
