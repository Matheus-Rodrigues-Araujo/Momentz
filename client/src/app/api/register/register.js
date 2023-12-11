'use server'

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const {
      register,
      handleSubmit,
    } = useForm({
      resolver: zodResolver(schema)
    });
  
    try {
      const data = await handleSubmit((data) => data)(req, res);
      // Handle your data and save it to the database or perform other actions
      console.log('Received data:', data);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error handling form submission:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }