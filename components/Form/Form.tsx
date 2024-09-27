import React, { useState } from "react";
import { Pressable, View} from "react-native";
import { TextInput } from "react-native";
import {Text} from "react-native";

export function Form(){
    const [Heigth, setHeigth] = useState(""); //Heigth: Altura
    const[Weigth, setWeigth] = useState(""); //weith: peso
    const[imc, setImc] = useState("");

    function imcCalculator(){
        let imc = (Weigth/(Math.pow(Heigth))).toFixed(2);
        useState(imc);
    }

    function ValidatorImc(){
        if(Weigth != "" && Heigth != ""){
            imcCalculator();
            setHeigth("");
            setWeigth("");
        }
    }


    return (
        <View>
            <View>
                <Text>Heigth:</Text>  

                <TextInput  //Quando uma tag nao tem conteudo podemos "abreviar" ela dessa forma 
                    placeholder="Ex 1.75"
                    inputMode="numeric"
                    value={Heigth}
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex 67.5"
                    inputMode="numeric"
                    value={Weigth}
                />

                <Pressable
                    onPress={()=>ValidatorImc()}
                
                />

            </View>
        </View>
       
    )
}