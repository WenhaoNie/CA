const greetWorld = () =>{
    return 'Hello, World!'
}

const canIVote = age =>{
    return age >= 18
}

const agreeOrDisagree = (op1, op2) =>{
    msg = ''
    if(op1 === op2){msg = 'You agree!'}
    else{msg = 'You disagree!'}

    return msg
}

const lifePhase = age => {
    phase = ''
    if (age>=0 && age<=3){phase = 'baby'}
    else if (age>=4 && age<=12){phase = 'child'}
    else if (age>=13 && age<=19){phase = 'teen'}
    else if (age>=20 && age<=64){phase = 'adult'}
    else if (age>=65 && age<=140){phase = 'senior citizen'}
    else {phase = 'This is not a valid age'}

    return phase
}

const finalGrade = (a,b,c) => {
    avg = (a+b+c)/3
    msg = ''
    if(a<0||b<0||c<0||a>100||b>100||c>100){msg='You have entered an invalid grade.'}
    else{
        if(avg>=0&&avg<=59){msg='F'}
        else if(avg>=60&&avg<=69){msg='D'}
        else if(avg>=70&&avg<=79){msg='C'}
        else if(avg>=80&&avg<=89){msg='B'}
        else if(avg>=90&&avg<=100){msg='A'}    
    }

    return msg
}

const reportingForDuty = (rank,lastName) =>{
    return rank+' '+lastName+' reporting for duty!'
}

const calculateWeight = (earthWeight, planet) => {
    let weight='Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    switch (planet){
        case 'Mercury': weight=earthWeight*0.378; break;
        case 'Venus': weight=earthWeight*0.907; break;
        case 'Mars': weight=earthWeight*0.377; break;
        case 'Jupiter': weight=earthWeight*2.36; break;
        case 'Saturn': weight=earthWeight*0.916; break;
    }
    return weight
}

const truthyOrFalsy = value => {
    return Boolean(value)
}

const numImaginaryFriends = totalFriends => {return Math.ceil(totalFriends/4)}

const sillySentence = (a,b,c) =>{
    return 'I am so '+a+' because I '+b+' coding! Time to write some more awesome '+c+'!'
}

const howOld = (age,year) => {
    const now = 2022
    let msg = ''
    if(year>now){
        age += year-now
        msg = 'You will be '+age+' in the year '+year
    }else if(year<now-age){
        diff = now-age-year
        msg = 'The year '+year+' was '+diff+' years before you were born'
    }else{
        pAge = year - (now-age)
        msg = 'You were '+pAge+' in the year '+ year
    }
    return msg
}

const tipCalculator = (quality,total)=>{
    let tip=total*0.18
    switch(quality){
        case 'bad': tip=total*0.05; break;
        case 'ok': tip=total*0.15; break;
        case 'good': tip=total*0.2; break;
        case 'excellent': tip=total*0.3; break;
    }
    return tip
}

const toEmoticon = emo =>{
    let msg='|_(* ~ *)_|'
    switch (emo){
        case 'shrug': msg='|_{"}_|';break;
        case 'smiley face': msg=':)';break;
        case 'frowny face': msg=':(';break;
        case 'winky face': msg=';)';break;
        case 'heart': msg='<3';break;
    }
    return msg
}