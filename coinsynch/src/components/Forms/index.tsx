"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Password from '@/imgs/password.svg'
import Modal from '../Modal/Modal';

const Forms = ({ CloseModalSingIn }: any) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // if (isModalOpen === true) {
    //   CloseModalSingIn(false)
    // }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <form action="">
        <input type="email" id='email' placeholder='Email' />
        <div className='card_modal-singin-password'>
          <input
            id='password'
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisibility}>
            <Image src={Password} alt='' />
          </span>
        </div>
        <Link href='/'>Forgot password?</Link>
        <button>Sing in</button>
        <p>Don`t have an account? <Link href='' onClick={() => handleOpenModal()}><span>Sing up to</span> <span>Coin</span>Synch</Link> </p>
      </form>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h1>Olaslb</h1>
      </Modal>
    </>
  )
}

export default Forms