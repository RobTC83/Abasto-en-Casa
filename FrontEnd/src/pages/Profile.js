import React, { Component } from 'react'
import PROFILE_SERVICE from '../services/user'
import { Form, Input, Button } from 'antd'
import { MyContext } from '../context/context'
class Profile extends Component {

 async componentDidMount() {
  //const response = await PROFILE_SERVICE.PROFILE()
 }

 onFinish = async ( values ) => {
 await PROFILE_SERVICE.UPDATE( values );
 this.props.history.push("/")
 }

 render() {
  return(
  <MyContext.Consumer>
  {({ loggedUser }) => {
   console.log(loggedUser)
   return (
   <>
   <p>{this.loggedUser}</p>
   <h1>Mi Perfil</h1>
   <h4>Edita tu cuenta</h4>

   <br/>
   <div>
      <Form labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
         onFinish={this.onFinish}
         name= 'product'>
        <Form.Item initialValues={this.initialValues} label="Nombre:" name="name" rules={[{ required: true, message: 'Por favor inserta tu nombre completo' }]}>
          <Input placeholder="Nombre completo."/>
        </Form.Item>
        <Form.Item label="Correo:" name="mail" rules={[{ type: 'email', message: 'La entrada no es un correo electrónico válido' }, { required: true, message: 'Inserta tu correo electrónico' }]}>
          <Input placeholder="Correo electrónico."/>
        </Form.Item>
        <Form.Item label="Télefono:" name="telephone">
          <Input placeholder="Télefono de contacto."/>
        </Form.Item>
        <Form.Item  label="Domicilio" name='body' rules={[{ required: true, message: 'Inserta el mensaje a enviar' }]}>
        <Input placeholder="Por favor ingrese la dirección de entrega."/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Actualizar Perfil
        </Button>
      </Form.Item>
      </Form>
    </div>
    </>
   )
  }}
  </MyContext.Consumer>
  )
 }
}

export default Profile


