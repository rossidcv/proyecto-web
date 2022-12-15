//JSON a JS
const data = `{
    
    "tSkin":[
        {
            "name": "Tratamiento de piel grasa",
            "content":"Si tu piel es grasa debes prestar atención a tus lavados lo recomendable es realizar uno por la mañana y otro por la noche como así también máximo dos exfoliaciones a la semana.  Los productos hidratantes deben ser en gel y no utilizar solo aquellos que sean matificantes o tendientes a secar la piel, ya que provocaran el efecto contrario debido a que la misma comenzará a producir más grasa para contrarrestar el efecto." ,
            "img":"./imagenes/t-skin-g.jpg"
        },
        {
            "name": "Tratamiento de piel seca",
            "content":"Es importante que las lociones, cremas o bálsamos que uses para hidratar tu piel después del baño contengan lípidos fisiológicos, como las ceramidas, el colesterol y los ácidos grasos esenciales como el ácido hialurónico. También se recomienda que tengan otros activos que aporten o retengan la humedad. Intenta no demorar tanto en la ducha, elegir telas de fibras naturales como asi tambien los jabones, desodorantes, tonificantes y perfumes que no contengan alcohol, el uso de humidificadores tambien puede resultar beneficioso.",
            "img":"./imagenes/t-skin-s.jpg"
        },
        {
            "name": "Tratamiento de piel mixta",
            "content":"La piel mixta resulta muchas veces complicada porque ya de por si es dificil cuidar nuestro rostro con un tipo de piel imagina tener dos. En el caso de utilizar solo un producto hidratante buscar aquellos que sean libres de aceites para poder usarlos en la zona T. En casos que sientas la piel muy tirante o reseca despues de la hidratacion en la zona de las mejillas puedes reforzar con otra crema hidratante que contenga coenzima Q10 y/o resveratrol.",
            "img":"./imagenes/t-skin-m.jpg"
        }
    ],
    "tAcne":[
        {
            "name": "Tratamiento del acne",
            "content": "Lo primero que debes evaluar en caso de tener acné es su causa, por lo cual lo recomendable es acudir a un dermatólogo que pueda abordar el problema de forma profunda y el mismo te recetará los productos adecuados para realizar tu rutina de skincare. Te recomedamos ser siempre suave con tu piel , no usar productos abrasivos ,  limpiar tu rostro con agua tibia, evitar las camas solares y prestar atencion a la proteccion contra los rayos uv, mantenerer la manos alejadas del rostro y siempre dejar que los granitos sanen naturalmente.",
            "img":"./imagenes/t-acne-y.jpg"
        },
        {
            "name": "Prevención del acne",
            "content": "Por la noche, mientras dormimos, acumulamos sebo y células muertas en la superficie de la piel, que pueden obstruir los poros y crear el entorno perfecto para la formación de acné. La forma correcta de prevenir el ácne es usando seborreguladores como el ácido glicólico o el ácido salicílico. No se recomienda el uso de mascarillas peel off para quitar los puntos negros lo mejor es prevenirlos manteniendo los poros limpios",
            "img":"./imagenes/t-acne-n.jpg"
        }
    ],
    "tSense":[
        {
            "name": "Cuidados para piel sensible",
            "content": "Las pieles sensibles e intolerantes sufren una alteración en su función de barrera protectora. Este fenómeno favorece la pérdida de agua, por lo que la piel se  deshidrata y  facilita la penetración de agentes potencialmente irritantes. Si tu piel es sensible, algunos de los mejores activos son la niacinamida que ayuda a reparar la barrera cutánea, la centella asiática, calmante y cicatrizante, además de ayudar a mantener la humedad en la piel, el pantenol, con propiedades hidratantes, emolientes y antiinflamatorias",
            "img":"./imagenes/t-sensitive-y.png"
        },
        {
            "name": "Cuidados para piel no sensible",
            "content": "La estructura y características de la piel son dinámicas y acompañan cada etapa de nuestra vida de diferentes maneras, debido a la incidencia de distintos factores como el embarazo, la menopausia, algunos trastornos orgánicos o incluso el uso de ciertos fármacos, esta puede modificarse. Por eso es muy importante estar atentas a las señales que nos da nuestra dermis y usar productos específicos para nuestro tipo de piel, ya que esto ayudará a mantener el equilibrio necesario para que se encuentre saludable.",
            "img":"./imagenes/t-sensitive-n.jpg"
        } 
    ],
    "tOld": [
        {
            "name": "Cuidados para los signos de envejecimiento",
            "content": "En el caso de poseer signos de envejecimiento se recomienda usar productos con activos como el ácido hialurónico, retinol y vitamina c. El retinol es uno de los ingredientes antiedad más recomendados por los dermatólogos, ya que Complementa el proceso de renovación de la superficie de la piel minimizando la apariencia de las manchas de la edad y la vitamina C recupera la luminosidad de la misma",
            "img":"./imagenes/t-old-n.jpg"
        },
        {
            "name": "Prevención de arrugas",
            "content": "Un factor muy importante para prevenir arrugas y signos de envejecimiento es la protección solar. Los rayos UVA y UVB favorecen la aparición de las temidas manchas, así como la activación de metaloproteasas que degradan la matriz (fibras de colágeno, elastina y de ácido hialurónico), generando como consecuencia la aparición de las temidas arrugas. Además, los rayos solares favorecen la generación de radicales libres que atacan a diferentes componentes de las células de la piel, destruyendo las fibras de colágeno. ",
            "img":"./imagenes/t-old-y.jpg"
        } 
    ]
}`
const jsonData = JSON.parse(data)

// Funcion a la que va el btn
function getSelectValue(){
    
    //Valores del test
    type  = document.getElementById("type").value; 
    sense = document.getElementById("sensitivity").value; 
    acne = document.getElementById("acne").value; 
    oldSkin = document.getElementById("oldSkin").value;
    
    //advertencia de que una posicion no fue puesta
    if (type==="none" || sense ==="none" || acne ==="none" || oldSkin==="none"){
        const warning = document.getElementById("warn")
        warning.innerHTML = `<p class="t-warn-txt" >Por favor ingrese todos los valores</p>`
        
    //Que hacer en las distintas opciones
    }else {

        //Borrar advertencia
        const warning = document.getElementById("warn")
        warning.innerHTML = ``

        //def de que posicion tomar del JSON
        if (type === "grasa"){
            t = 0
        }else if (type ==="seca"){
            t = 1
        }else{
            t = 2
        }

        if (sense === "ySens"){
            s = 0
        }else{
            s = 1
        }

        if (acne === "yAcne"){
            a = 0
        }else{
            a = 1
        }
        
        if (oldSkin === "yOld"){
            o = 0
        }else{
            o = 1
        }

        // cards con la info de que hacer
        const cards = document.getElementById("cards")
        cards.innerHTML = `
    <div class="col-6 col-m-12">
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src=${jsonData.tSkin[t].img} alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tSkin[t].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tSkin[t].content}. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src=${jsonData.tSense[s].img} alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tSense[s].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tSense[s].content}. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6 col-m-12">
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src=${jsonData.tAcne[a].img} alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tAcne[a].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tAcne[a].content}. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src=${jsonData.tOld[o].img} alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tOld[o].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tOld[o].content}. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}


