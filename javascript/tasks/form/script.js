function getBtnText(step){
    return step === (steps.length -1)
        ? 'finish'
        : 'next';
}

function renderStep(step){
    document.querySelector('#step').src = steps[step];
    document.querySelector('button').innerText = getBtnText(step);
}

function form_init(steps){
    var currentStep = 0;

    document.querySelector('button').addEventListener('click', function(){
        if(currentStep === (steps.length -1)){
            return console.log('finish');
        }

        currentStep++;

        renderStep(currentStep);
    });

    renderStep(currentStep);
}