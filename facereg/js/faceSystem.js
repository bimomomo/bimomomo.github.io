$(document).ready(function(){

})
const imgRcg = null;
async function face() {
	await loadmodel();

	$('#desc').html('detecting refimg')
	const labels = ['refimg'];
	const labeledFaceDescriptors = await Promise.all(
		labels.map(async label => {
		const imgUrl = 'img/'+label+'.jpg'
		const img = await faceapi.fetchImage(imgUrl)
		
		const faceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
		if (!faceDescription) {
			throw new Error('no faces detected for '+label);
		}
		
		const faceDescriptors = [faceDescription.descriptor]
		return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
		})
	);
	
	await runAi(labeledFaceDescriptors);
}
async function loadmodel(){
	$('#desc').html('start loading model')
	const MODEL_URL = './models'

	await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
	await faceapi.loadFaceLandmarkModel(MODEL_URL)
	await faceapi.loadFaceRecognitionModel(MODEL_URL)
	await faceapi.loadFaceExpressionModel(MODEL_URL)

	// imgRcg = await faceapi.fetchImage(imgUrl)
	
	$('#desc').html('finish loading model')
}
async function runAi(m){
	$('#desc').html('start detecting face')
	const img = document.getElementById('originalImg')
	let faceDescriptions = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
	const threshold = 0.3
	const faceMatcher = new faceapi.FaceMatcher(m, threshold)
	if (faceDescriptions) {
		const bm = faceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor))
		console.log(bm)
		$('#matchrate').html(bm.toString())
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
