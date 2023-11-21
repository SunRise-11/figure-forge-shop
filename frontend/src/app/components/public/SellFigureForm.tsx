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

  const inputStyle =
    'bg-secondary appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary';
  const fieldStyle = 'flex flex-col gap-5 h-max mb-4 sm:w-1/2' 
  return (
    <form
      className="flex flex-col items-center gap-5 h-max mb-4 py-10 "
      onSubmit={onFormSubmit}
    >
      <legend>Details</legend>
      <fieldset className={fieldStyle}>
        <input
          className={inputStyle}
          {...register('name')}
          placeholder="Name"
        />
        <input
          className={inputStyle}
          {...register('origin')}
          placeholder="Origin"
        />
        <input
          className={inputStyle}
          {...register('brand')}
          placeholder="Brand"
        />
        <textarea 
          className={inputStyle}
          {...register('description')}
          placeholder="Description"
        />
        <input
          className={inputStyle}
          {...register('price', { valueAsNumber: true })}
          type="number"
          step="0.01"
          placeholder="Price (EUR)"
        />
      </fieldset>

      <legend>Dimensions</legend>
      <fieldset className={fieldStyle}>
        <input
          className={inputStyle}
          {...register('width', { valueAsNumber: true })}
          type="number"
          placeholder="Width (cm)"
        />
        <input
          className={inputStyle}
          {...register('length', { valueAsNumber: true })}
          type="number"
          placeholder="Length (cm)"
        />
        <input
          className={inputStyle}
          {...register('height', { valueAsNumber: true })}
          type="number"
          placeholder="Height (cm)"
        />
        <input
          className={inputStyle}
          {...register('weight', { valueAsNumber: true })}
          type="number"
          placeholder="Weight (g)"
        />
      </fieldset>

      <legend>Pictures</legend>
      <fieldset className={fieldStyle}>
      <input
        className={inputStyle}
        type="file"
        {...register('pictures')}
        multiple
      />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};
