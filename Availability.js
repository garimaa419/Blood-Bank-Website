document.addEventListener('DOMContentLoaded', function() {
    const bloodAvailability = {
        'A+': 10,
        'A-': 5,
        'B+': 8,
        'B-': 3,
        'O+': 15,
        'O-': 2,
        'AB+': 7,
        'AB-': 4
    };

    document.getElementById('check-availability').addEventListener('click', function() {
        const bloodType = document.getElementById('blood-type-availability').value;
        const resultDiv = document.getElementById('availability-result');

        if (bloodType) {
            const availability = bloodAvailability[bloodType];
            if (availability !== undefined) {
                resultDiv.innerHTML = `<p>Availability for blood type ${bloodType}: ${availability} units.</p>`;
            } else {
                resultDiv.innerHTML = `<p>Blood type ${bloodType} not found.</p>`;
            }
        } else {
            resultDiv.innerHTML = '<p>Please select a blood type.</p>';
        }
    });
});