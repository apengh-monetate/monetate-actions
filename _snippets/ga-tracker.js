ga(function() {
    // Logs an array of all tracker objects
    var trackers = ga.getAll();
    console.log(trackers);

    var data = {};
    trackers.forEach((tracker) => {
        var name = tracker.get('name');
        var attributes = tracker.b.data.keys;
        var trackerData = {};
        attributes.forEach((attribute) => {
            console.log(attribute, tracker.get(attribute));
            var value = tracker.get(attribute);
            console.log(attribute, value);
            trackerData[attribute] = value;
        });
        console.log('trackerData', trackerData);
        data[name] = data[name] || [];
        data[name].push(trackerData);
    });

    console.log(data);
});
