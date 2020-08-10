import React from "react"
import ilustration from "../imgs/undraw_content_team_3epn.svg"
import Form from "./contact.form"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className=" flex justify-center items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-purple-700">
            Hola, Soy Raul Eduardo Aguirre Hermosillo
          </h1>
          <p className="text-xl font-light">
            Soy Arquitecto de software y actualmente trabajo en Microsoft México
          </p>
        </div>
        <img
          src={ilustration}
          alt="Trabajando"
          style={{ height: "300px" }}
        ></img>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
)
