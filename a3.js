function createVis(errors, mapData, womensData, mensData, teammateData)
{
    // call your own functions from here, or embed code here 
    createMap("#map-women", mapData, womensData, mensData);
    createMap("#map-men", mapData, womensData, mensData);
	createTeammateMap("#teammates", mensData, teammateData);
}

// uncomment the cdn.rawgit.com versions and comment the cis.umassd.edu versions if you require all https data
d3.queue().defer(d3.json, "https://cdn.rawgit.com/johan/world.geo.json/master/countries.geo.json")
    .defer(d3.json, "http://www.cis.umassd.edu/~dkoop/cis468-2017sp/a3/fifa-17-women.json")
    //.defer(d3.json, "https://cdn.rawgit.com/dakoop/e4fa063e3f3415f3d3c79456bc4b6dc5/raw/a9e01691802c8e70d94ce33a59e98529cc4324af/fifa-17-women.json")
    .defer(d3.json, "http://www.cis.umassd.edu/~dkoop/cis468-2017sp/a3/guardian-16-men.json")
    //.defer(d3.json, "https://cdn.rawgit.com/dakoop/e4fa063e3f3415f3d3c79456bc4b6dc5/raw/a9e01691802c8e70d94ce33a59e98529cc4324af/guardian-16-men.json")
    .defer(d3.json, "http://www.cis.umassd.edu/~dkoop/cis468-2017sp/a3/soccer-teammates-men.json")
    //.defer(d3.json, "https://cdn.rawgit.com/dakoop/e4fa063e3f3415f3d3c79456bc4b6dc5/raw/a9e01691802c8e70d94ce33a59e98529cc4324af/soccer-teammates-men.json")
    .await(createVis);

