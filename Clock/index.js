function setDate(){
    const date=new Date();
    const second=date.getSeconds();
   
    const secondDegree=((second/60)*360)+90;
    const secondHand=document.querySelector('.secondhand');
    secondHand.style.transform= `rotate(${secondDegree}deg)`;
    
    const min=date.getMinutes();
    const minuteDegree=((min/60)*360)+90;
    const minHand=document.querySelector('.minutehand');
    minHand.style.transform=`rotate(${minuteDegree}deg)`;

    const hour=date.getHours();
    console.log(hour);
    const hourDegree=((hour/2)*360)+90;
    const hourHand=document.querySelector('.hourhand');
    hourHand.style.transform=`rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000);