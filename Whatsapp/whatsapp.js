console.log('Hello world!');
let button = document.querySelector('.button');
let input = document.getElementById("enter");
let unorderedList = document.querySelector(".ListItems")
let saveBtn = document.querySelector('.save')
let lead = []
let InputArray = []
let countryCode;
let outputVal;



button.addEventListener("click", function(){
        console.log("clicked");
        let InputVal = input.value ; 

        // storing inputal in a loacalstorage so it will not clear with r
        let InputArray = []
        InputArray.push(InputVal)
       localStorage.setItem('StoredInputval', JSON.stringify((InputArray)))  ;

        console.log(typeof InputVal);
        if(InputVal.charAt(0) === '0' ){
                countryCode = Number(prompt('Enter you countryCode(without signs(-,+))'));
                console.log(InputVal)   
                replacement = InputVal.replace( '0' , countryCode);
                console.log(replacement)
                outputVal = `https://wa.me/${replacement}`; // replacement is used as the inputVal in this case bexcause the first char of the string is to be changed to a countrycode, i.e  inputVal = replacement in this case
                console.log(typeof countryCode) // toString() makes a string
                
                if(countryCode === 0) {
                        replacement = ''
                        InputVal =''
                        let LIs = document.createElement('li');
                        let errorSpan = document.createElement('span');
                        let closer2 = document.createTextNode('\u00D7');
                        let span2 = document.createElement('span');
                        span2.classList.add('close')
                        span2.appendChild(closer2);
                        errorSpan.className = 'error';
                        let error = document.createTextNode('Unable to generate whatsapp contact url');
                        errorSpan.appendChild(error);
                        errorSpan.appendChild(span2)
                        LIs.appendChild(errorSpan);
                        console.log(LIs)
                        unorderedList.appendChild(LIs)
                        let thisCloser = document.querySelectorAll('span')
                        console.log(thisCloser)
                        thisCloser.forEach(element => {
                               element.addEventListener('click' , function() {
                                        let div2 = this.parentElement;
                                        div2.style.display = 'none'
                                      })
                        });

        
                }
               
           }
           else if (InputVal.charAt(0) === '-' ){
                console.log('-')
                replacement = InputVal.replace('-', '');
                outputVal = `https://wa.me/${replacement}`;
           }
         else {
                outputVal = `https://wa.me/${InputVal}`;
         }
        
       
        
        if (InputVal !== '') {  
                console.log(outputVal);
                let displayLink = document.createTextNode(outputVal);
                let LI = document.createElement('li');
                let A =  document.createElement('a');
                A.setAttribute('href', outputVal );
                console.log(A)
                let closer = document.createTextNode('\u00D7');
                let span = document.createElement('span');
                span.classList.add('close')
                span.appendChild(closer)
                A.appendChild(displayLink);
                LI.appendChild(A)
                LI.appendChild(span)
                unorderedList.appendChild(LI)
                let closing = document.querySelectorAll('span')
                console.log(closing)
                closing.forEach(element => {
                        console.log('found')
                        element.addEventListener('click' , function(){
                                console.log('clicked')
                                let div = this.parentElement;
                                div.style.display = 'none'
                        })
                });
               
                         // || 👇
               // for (let i = 0; i < closing.length; i++) {
                        
                      // closing[i].addEventListener('click' , function(){
                       // console.log('clicked')
                       // let div = this.parentElement;
                        //div.style.display = 'none'
              //  })

                       
               // }
          
            
        }

});

