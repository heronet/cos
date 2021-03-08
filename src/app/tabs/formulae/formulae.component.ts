import { Component, OnInit } from '@angular/core';
import { Formula } from 'src/app/models/Formula';

@Component({
  selector: 'app-formulae',
  templateUrl: './formulae.component.html',
  styleUrls: ['./formulae.component.css']
})
export class FormulaeComponent implements OnInit {
  formulae_math: Formula[] = [
    {lhs: "Cos2A", rhs: ["Cos²A - Sin²A", "1 – 2Sin²A", "2Cos²A - 1", "(1 - tan²A) ÷ (1 + tan²A)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Sin2A", rhs: ["2SinA.CosA",  "(2tanA) / (1 + tan²A)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Tan2A", rhs: ["2tan θ / (1 - tan²θ)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "2SinA.SinB", rhs: ["Cos(A - B) - Cos(A + B)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "2SinA.CosB", rhs: ["Sin(A + B) + Sin(A - B)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "2CosA.SinB", rhs: ["Sin(A + B) - Sin(A - B)"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Cos(A + B)", rhs: ["CosA.CosB - SinA.SinB"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Cos(A - B)", rhs: ["CosA.CosB + SinA.SinB"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Sin(A + B)", rhs: ["SinA.CosB + CosA.SinB"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Sin(A - B)", rhs: ["SinA.CosB - CosA.SinB"], subject: "Trigonometry", chapter: "7"},
    {lhs: "SinC + SinD", rhs: ["2Sin[(C + D) / 2].Cos[(C - D) / 2]"], subject: "Trigonometry", chapter: "7"},
    {lhs: "SinC - SinD", rhs: ["2Cos[(C + D) / 2].Sin[(C - D) / 2]"], subject: "Trigonometry", chapter: "7"},
    {lhs: "CosC + CosD", rhs: ["2Cos[(C + D) / 2].Cos[(C - D) / 2]"], subject: "Trigonometry", chapter: "7"},
    {lhs: "CosC - CosD", rhs: ["2Sin[(C + D) / 2].Sin[(D - C) / 2]"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Sin(A + B).Sin(A - B)", rhs: ["Sin²A - Sin²B", "Cos²B - Cos²A"], subject: "Trigonometry", chapter: "7"},
    {lhs: "Cos(A + B).Cos(A - B)", rhs: ["Cos²A - Sin²B", "Cos²B - Sin²A"], subject: "Trigonometry", chapter: "7"},
  ]
  formulae_physics: Formula[] = [
    {lhs: "v²", rhs: ["u² - 2as"], subject: "Dynamics", chapter: "3"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
