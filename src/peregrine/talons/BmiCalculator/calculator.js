import React from 'react';

export default function Calculator() {
    
    function calculateBMI(person) {
        // Extract properties from the person object
        const { age, gender, height, weight } = person;

        // Convert height from cm to meters
        const heightInMeters = height / 100;

        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);

        // Determine the BMI status based on the classification data
        let status;

        let percentage;

        if (age >= 0 && age <= 18) {
            // BMI classification for children and teenagers
            if (gender === 'male') {
                if (bmi < 16) {
                    status = 'Severe Thinness';
                    percentage=0.2
                } else if (bmi >= 16 && bmi < 17) {
                    status = 'Moderate Thinness';
                    percentage=0.3
                } else if (bmi >= 17 && bmi < 18.5) {
                    status = 'Mild Thinness';
                    percentage=0.4
                } else if (bmi >= 18.5 && bmi < 25) {
                    status = 'Normal';
                    percentage=0.5
                } else if (bmi >= 25 && bmi < 30) {
                    status = 'Overweight';
                    percentage=0.6
                } else {
                    status = 'Obese';
                    percentage=0.8
                }
            } else if (gender === 'female') {
                if (bmi < 16) {
                    status = 'Severe Thinness';
                    percentage=0.3
                } else if (bmi >= 16 && bmi < 17) {
                    status = 'Moderate Thinness';
                    percentage=0.4
                } else if (bmi >= 17 && bmi < 18.5) {
                    status = 'Mild Thinness';
                    percentage=0.5
                } else if (bmi >= 18.5 && bmi < 25) {
                    status = 'Normal';
                    percentage=0.6
                } else if (bmi >= 25 && bmi < 30) {
                    status = 'Overweight';
                    percentage=0.7
                } else {
                    status = 'Obese';
                    percentage=0.8
                }
            }
        } else {
            // BMI classification for adults
            if (bmi < 16) {
                status = 'Severe Thinness';
                percentage=0.2
            } else if (bmi >= 16 && bmi < 17) {
                status = 'Moderate Thinness';
                percentage=0.3
            } else if (bmi >= 17 && bmi < 18.5) {
                status = 'Mild Thinness';
                percentage=0.4
            } else if (bmi >= 18.5 && bmi < 25) {
                status = 'Normal';
                percentage=0.5
            } else if (bmi >= 25 && bmi < 30) {
                status = 'Overweight';
                percentage=0.6
            } else if (bmi >= 30 && bmi < 35) {
                status = 'Obese Class I';
                percentage=0.7
            } else if (bmi >= 35 && bmi < 40) {
                status = 'Obese Class II';
                percentage=0.8
            } else {
                status = 'Obese Class III';
                percentage=0.9
            }
        }

        return  { bmi: bmi.toFixed(2), status ,percentage:percentage};
    }
    
    return { calculateBMI };
}
