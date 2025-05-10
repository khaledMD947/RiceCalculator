document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('riceForm');
    const resultContainer = document.getElementById('result');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            // Get input values
            const riceWeight = parseFloat(document.getElementById('riceWeight').value);
            const moisture = parseFloat(document.getElementById('moisture').value);
            const riceType = document.getElementById('riceType').value;
            
            // Validate inputs
            if (isNaN(riceWeight)) throw new Error('Please enter valid rice weight');
            if (isNaN(moisture) || moisture < 0 || moisture > 100) {
                throw new Error('Moisture must be between 0-100%');
            }
            if (!riceType) throw new Error('Please select rice type');
            
            // Perform calculations
            const dryMatter = 100 - moisture;
            const adjustment = riceType === 'D' ? 88 : 86;
            const calculated = (dryMatter * riceWeight) / adjustment;
            const paddyTons = calculated / 2;
            const riceTons = paddyTons * 0.66;
            
            // Display results
            document.getElementById('paddyResult').textContent = paddyTons.toFixed(3);
            document.getElementById('riceResult').textContent = riceTons.toFixed(3);
            
            // Show results with animation
            resultContainer.classList.add('visible');
            
            // Scroll to results
            setTimeout(() => {
                resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
            
        } catch (error) {
            alert(error.message);
        }
    });
    
    // Add animation to calculator container on load
    setTimeout(() => {
        document.querySelector('.calculator-container').style.transform = 'translateY(0) rotateX(0)';
    }, 100);
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
    
});
