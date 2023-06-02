AFRAME.registerComponent('draggable', {
    init: function () {
      var box = this.el;
      var isDragging = false;
      var previousPosition = new THREE.Vector3();
      box.addEventListener('mousedown', function (event) {
        isDragging = true;
        previousPosition.copy(box.object3D.position);
      });
      box.addEventListener('mouseup', function (event) {
        isDragging = false;
      });
      box.addEventListener('mouseleave', function (event) {
        isDragging = false;
      });
      box.sceneEl.addEventListener('mousemove', function (event) {
        if (!isDragging) { return; }
        var deltaX = event.clientX - previousPosition.x;
        var deltaY = event.clientY - previousPosition.y;
        var deltaZ = event.clientX - previousPosition.z;
        box.object3D.position.set(previousPosition.x + deltaX, previousPosition.y + deltaY, previousPosition.z + deltaZ);
      });
    }
  });
  