$(document).ready(function(){

})
async function face() {
	await loadmodel();
	await runAi();
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
async function runAi(){
	$('#desc').html('start detecting face')
	console.log('work')
	const img= document.getElementById('originalImg')
	let faceDescriptions = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
	const canvas = $('#reflay').get(0)
	faceapi.matchDimensions(canvas, img)
	faceDescriptions = faceapi.resizeResults(faceDescriptions, img)
	faceapi.draw.drawDetections(canvas, faceDescriptions)
	faceapi.draw.drawFaceLandmarks(canvas, faceDescriptions)
	faceapi.draw.drawFaceExpressions(canvas, faceDescriptions)
	$('#desc').html('finish detecting face')

	await setTimeout(async () => await this.runAi(),90)
}
