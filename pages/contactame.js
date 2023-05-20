import Layout from "../components/Layout"
import React, { useState } from 'react';
const Contactame = () =>

    <Layout>
        <>
            <div className="col-md-12">
                <div className="card card-body bg-light">
                    <div className="row py-11">
                        <div className="contact_form">
                            <div className="formulario">
                                <h1 className="text-center text-dark">Contact Me</h1>
                                <h3 className="text-center text-dark">Hola, Escríbeme y en breve los pondremos en contacto contigo</h3>
                                <form action="submeter-formulario.php" method="post">
                                    <div className="form-group">
                                        <label htmlFor="nombre">
                                            Nombre
                                            <span className="obligatorio">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="introducir_nombre"
                                            id="nombre"
                                            required="obligatorio"
                                            placeholder="Digite tu nombre"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email
                                            <span className="obligatorio">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="introducir_email"
                                            id="email"
                                            required="obligatorio"
                                            placeholder="Escribe tu Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="introducir_telefono"
                                            id="telefono"
                                            placeholder="Escribe tu teléfono"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="asunto">
                                            Asunto
                                            <span className="obligatorio">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="introducir_asunto"
                                            id="assunto"
                                            required="obligatorio"
                                            placeholder="Escribe un asunto"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mensaje">
                                            Mensaje
                                            <span className="obligatorio">*</span>
                                        </label>
                                        <textarea
                                            name="introducir_mensaje"
                                            className="form-control texto_mensaje"
                                            id="mensaje"
                                            required="obligatorio"
                                            placeholder="Ingrese tu comentario..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button type="submit" name="enviar_formulario" id="enviar" className="btn btn-primary">
                                        Enviar
                                    </button>
                                    <p className="aviso">
                                        <span className="obligatorio">*</span>Todos los campos son obligatorios.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    </Layout>
export default Contactame