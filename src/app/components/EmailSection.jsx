'use client'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import FacebookIcon from '../../../public/images/icons/FacebookIcon.svg'
import GithubIcon from '../../../public/images/icons/GithubIcon.svg'
import { ScrollContext } from '../page'

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const EmailSection = () => {
  const { sectionRefs } = useContext(ScrollContext)
  const { register, handleSubmit, watch, formState, reset } = useForm()
  const form = useRef()
  let toastId

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      toastId = toast.loading('Delivering the message ✉ with a bird 🐦')
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      toast.success('The bird 🐦 sent the message ✉ safely', {
        id: toastId,
      })
    } catch (error) {
      toast.error(
        'The bird 🐦 got struck by lightning ⚡ while delivering the message ✉',
        { id: toastId }
      )
    }
  }

  return (
    <section
      ref={sectionRefs.contact}
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
      <div className='z-0'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Thank you ✨ for checking out my portfolio. If you have anything in
          mind, just send me a message with your email or contact me through the
          facebook link.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link
            className='cursor-none'
            target='blank'
            href='https://github.com/Novo1999'
          >
            <Image
              className='bg-gray-300 w-10 rounded-full hover:bg-white transition-colors duration-300'
              src={GithubIcon}
              alt='github icon'
            />
          </Link>
          <Link
            className='cursor-none'
            target='blank'
            href='https://www.facebook.com/Novodipp/'
          >
            <Image
              className='bg-gray-300 w-10 rounded-full hover:bg-blue-500 transition-colors duration-300'
              src={FacebookIcon}
              alt='github icon'
            />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='text-white block mb-2 text-sm font-medium'
            >
              Your Email
            </label>
            <input
              {...register('user_email', {
                required: true,
                pattern: emailRegex,
              })}
              name='user_email'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              type='email'
              id='email'
              placeholder='sam@gmail.com'
            />
            {formState.errors.email &&
              formState.errors.email.type === 'required' && (
                <span className='text-red-500 ml-1 text-sm'>
                  This is required
                </span>
              )}
            {formState.errors.email &&
              formState.errors.email.type === 'pattern' && (
                <span className='text-red-500 ml-1 text-sm'>Invalid Email</span>
              )}
          </div>

          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='text-white mb-2 block text-sm font-medium'
            >
              Subject
            </label>
            <input
              {...register('subject')}
              name='subject'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              type='text'
              placeholder='Just Saying Hi'
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea
              {...register('message', { required: true })}
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            ></textarea>
            {formState.errors.message &&
              formState.errors.message.type === 'required' && (
                <span className='text-red-500 ml-1 text-sm'>
                  This is required
                </span>
              )}
          </div>
          <button
            disabled={formState.isSubmitting}
            type='submit'
            className={`${
              formState.isSubmitting
                ? 'bg-gray-500 hover:bg-gray-500'
                : 'bg-green-500 hover:bg-green-600'
            } hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full`}
          >
            {formState.isSubmitting ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
export default EmailSection
