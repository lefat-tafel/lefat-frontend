import React, { Component } from "react";

export const RecipientFormPage = () => { 
    return (
        <div>
        <input value="firstName"/>
        <textarea
          value="Vorname"
        />
        <input value="surname"/>
        <textarea
          value="Nachname"
        />
        <input value="address"/>
        <textarea
          value="Adresse"
        />
        <button>Absenden</button>
      </div>
    );
};