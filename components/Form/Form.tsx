import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import {Text, View } from "react-native";

export function Form(){
    const[n, setSide] = useState(''); 
    //n é o nome da variavel setSide é uma funcao que realiza troca, useState é quem vai capturar o  que foi digitado 
    parseInt(n);
    const[area, setArea] = useState('');


    function CalcularArea(){
        let r = (Math.pow(n,2)* Math.sqrt(3))/4;
        setArea(r);
    }

    return (
        <View>
            <View>
                <Text>Lado:</Text>  

                <TextInput  //Quando uma tag nao tem conteudo podemos "abreviar" ela dessa forma 
                    onChangeText={setSide}
                    placeholder="Digite o lado em cm"
                    inputMode="numeric"
                    value={n}
                /> 

                <Pressable
                    onPress={()=>CalcularArea()}
                
                />

            </View>
        </View>
       
    )
}