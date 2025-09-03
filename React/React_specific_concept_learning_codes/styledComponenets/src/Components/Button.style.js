import styled from "styled-components";

export const Button=styled.button`
width:250px;
height:80px;
background-color:${(props)=> props.bg};
font-size:28px;
outline:none;
border:none;
cursor:pointer;
border-radius:8px;
 &:hover{
 background-color:coral;
 color:white;

 &:active{
 background-color:white;
 color:black;
 }
 }



`