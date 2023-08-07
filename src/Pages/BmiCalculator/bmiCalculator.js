import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { useForm } from 'react-hook-form';
import Calculator from '../../peregrine/talons/BmiCalculator/calculator';
import bmistyle from './bmiCalculator.module.css';

export default function BmiCalculator() {
    const { handleSubmit, register } = useForm();
    const [status, setstatus] = useState({ percentage: 0 });

    const { calculateBMI } = Calculator();

    function onSubmit(data) {
        let result = calculateBMI(data);
        setstatus(result);
    }
    return (
        <>
            <span data-cy="SignIn-title" className={bmistyle.title}>
                <h1 className={bmistyle.title}>BMI Calculator</h1>
            </span>

            <div className={bmistyle.contentContainer}>
                <form
                    className={bmistyle.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="height" className={bmistyle.label}>
                        Height:
                    </label>

                    <input
                        type="text"
                        name="height"
                        {...register('height')}
                        className={bmistyle.input}
                    />

                    <label htmlFor="weight" className={bmistyle.label}>
                        Weight:
                    </label>

                    <input
                        type="text"
                        name="weight"
                        {...register('weight')}
                        className={bmistyle.input}
                    />

                    <label htmlFor="age" className={bmistyle.label}>
                        Age:
                    </label>

                    <input
                        type="text"
                        name="age"
                        {...register('age')}
                        className={bmistyle.input}
                    />

                    <label htmlFor="gender" className={bmistyle.label}>
                        Gender:
                    </label>

                    <div className={bmistyle.inputradio}>
                        <label htmlFor="gender" className={bmistyle.label}>
                            Male:
                        </label>

                        <input
                            type="radio"
                            name="gender"
                            value={'male'}
                            {...register('gender')}
                        />

                        <label htmlFor="gender" className={bmistyle.label}>
                            Female:{' '}
                        </label>

                        <input
                            type="radio"
                            name="gender"
                            value={'female'}
                            {...register('gender')}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Calculate"
                        className={bmistyle.root_highPriority}
                    />
                </form>

                <h3>BMI:{status?.bmi}</h3>
                <h3>Status:{status?.status}</h3>

                <div>
                    <GaugeChart
                        id="gauge-chart5"
                        nrOfLevels={420}
                        arcsLength={[
                            0.12,
                            0.12,
                            0.12,
                            0.12,
                            0.12,
                            0.12,
                            0.12,
                            0.12
                        ]}
                        colors={[
                            '#388E3C',
                            '#2E7D32',
                            '#1B5E20',
                            '#FBC02D',
                            '#F9A825',
                            '#F57F17',
                            '#C62828',
                            '#B71C1C'
                        ]}
                        percent={status?.percentage}
                        arcPadding={0.02}
                        hideText={true}
                    />
                </div>
            </div>
        </>
    );
}
