'use client';
import { httpPostFigure } from '@/app/api/http/requests';
import { Figure } from '@/types';
import React from 'react';
import { useForm } from 'react-hook-form';

export const SellFigureForm = () => {
  const { register, handleSubmit } = useForm<Figure>();

  const onFormSubmit = handleSubmit((data) => {
    httpPostFigure(data);
  });

  return (
    <form onSubmit={onFormSubmit}>
      <input {...register('name')} placeholder="Name" />
      <input {...register('origin')} placeholder="Origin" />
      <input {...register('brand')} placeholder="Brand" />
      <input
        {...register('width', { valueAsNumber: true })}
        type="number"
        placeholder="Width"
      />
      <input
        {...register('length', { valueAsNumber: true })}
        type="number"
        placeholder="Length"
      />
      <input
        {...register('height', { valueAsNumber: true })}
        type="number"
        placeholder="Height"
      />
      <input
        {...register('weight', { valueAsNumber: true })}
        type="number"
        placeholder="Weight"
      />
      <input {...register('description')} placeholder="Description" />
      <input
        {...register('price', { valueAsNumber: true })}
        type="number"
        step="0.01"
        placeholder="Price"
      />
      <input
        {...register('rating', { valueAsNumber: true })}
        type="number"
        placeholder="Rating"
      />
      <input type="file" {...register('pictures')} multiple />
      <button type="submit">Submit</button>
    </form>
  );
};
