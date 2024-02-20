class ParameterSlider {
    constructor(updateCallback) {
        this.updateCallback = updateCallback;
        this.initSliders();
    }

    initSliders() {
        this.setupSlider('object_rescale', 0.1, 5.0, 1.0, 0.1);
        this.setupSlider('object_offset_x', -5, 5, 0.0, 0.1);
        this.setupSlider('object_offset_y', -5, 5, 0.6, 0.1);
        this.setupSlider('object_offset_z', -5, 5, -0.5, 0.1);
        this.setupSlider('near_plane', 0.1, 10, 0.2, 0.1);

        document.getElementById('saveSettings').addEventListener('click', () => {
            this.saveSettings();
        });
    }

    setupSlider(id, min, max, value, step) {
        const slider = document.getElementById(id);
        const output = document.getElementById(id + '_value');
        slider.min = min;
        slider.max = max;
        slider.value = value;
        slider.step = step;
        output.textContent = value;

        slider.addEventListener('input', (e) => {
            output.textContent = e.target.value;
            this.updateCallback(id, parseFloat(e.target.value));
        });
    }

    saveSettings() {
        const settings = {
            object_rescale: parseFloat(document.getElementById('object_rescale').value),
            object_offset_x: parseFloat(document.getElementById('object_offset_x').value),
            object_offset_y: parseFloat(document.getElementById('object_offset_y').value),
            object_offset_z: parseFloat(document.getElementById('object_offset_z').value),
            near_plane: parseFloat(document.getElementById('near_plane').value)
        };

        localStorage.setItem('objectSettings', JSON.stringify(settings));
        alert('Settings saved');
    }
}
