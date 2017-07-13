
// initates pym!
var pymChild = new pym.Child();

!function(){function t(n,t){function r(t){var r,e=n.arcs[0>t?~t:t],o=e[0];return n.transform?(r=[0,0],e.forEach(function(n){r[0]+=n[0],r[1]+=n[1]})):r=e[e.length-1],0>t?[r,o]:[o,r]}function e(n,t){for(var r in n){var e=n[r];delete t[e.start],delete e.start,delete e.end,e.forEach(function(n){o[0>n?~n:n]=1}),f.push(e)}}var o={},i={},u={},f=[],c=-1;return t.forEach(function(r,e){var o,i=n.arcs[0>r?~r:r];i.length<3&&!i[1][0]&&!i[1][1]&&(o=t[++c],t[c]=r,t[e]=o)}),t.forEach(function(n){var t,e,o=r(n),f=o[0],c=o[1];if(t=u[f])if(delete u[t.end],t.push(n),t.end=c,e=i[c]){delete i[e.start];var a=e===t?t:t.concat(e);i[a.start=t.start]=u[a.end=e.end]=a}else i[t.start]=u[t.end]=t;else if(t=i[c])if(delete i[t.start],t.unshift(n),t.start=f,e=u[f]){delete u[e.end];var s=e===t?t:e.concat(t);i[s.start=e.start]=u[s.end=t.end]=s}else i[t.start]=u[t.end]=t;else t=[n],i[t.start=f]=u[t.end=c]=t}),e(u,i),e(i,u),t.forEach(function(n){o[0>n?~n:n]||f.push([n])}),f}function r(n,r,e){function o(n){var t=0>n?~n:n;(s[t]||(s[t]=[])).push({i:n,g:a})}function i(n){n.forEach(o)}function u(n){n.forEach(i)}function f(n){"GeometryCollection"===n.type?n.geometries.forEach(f):n.type in l&&(a=n,l[n.type](n.arcs))}var c=[];if(arguments.length>1){var a,s=[],l={LineString:i,MultiLineString:u,Polygon:u,MultiPolygon:function(n){n.forEach(u)}};f(r),s.forEach(arguments.length<3?function(n){c.push(n[0].i)}:function(n){e(n[0].g,n[n.length-1].g)&&c.push(n[0].i)})}else for(var h=0,p=n.arcs.length;p>h;++h)c.push(h);return{type:"MultiLineString",arcs:t(n,c)}}function e(r,e){function o(n){n.forEach(function(t){t.forEach(function(t){(f[t=0>t?~t:t]||(f[t]=[])).push(n)})}),c.push(n)}function i(n){return l(u(r,{type:"Polygon",arcs:[n]}).coordinates[0])>0}var f={},c=[],a=[];return e.forEach(function(n){"Polygon"===n.type?o(n.arcs):"MultiPolygon"===n.type&&n.arcs.forEach(o)}),c.forEach(function(n){if(!n._){var t=[],r=[n];for(n._=1,a.push(t);n=r.pop();)t.push(n),n.forEach(function(n){n.forEach(function(n){f[0>n?~n:n].forEach(function(n){n._||(n._=1,r.push(n))})})})}}),c.forEach(function(n){delete n._}),{type:"MultiPolygon",arcs:a.map(function(e){var o=[];if(e.forEach(function(n){n.forEach(function(n){n.forEach(function(n){f[0>n?~n:n].length<2&&o.push(n)})})}),o=t(r,o),(n=o.length)>1)for(var u,c=i(e[0][0]),a=0;n>a;++a)if(c===i(o[a])){u=o[0],o[0]=o[a],o[a]=u;break}return o})}}function o(n,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return i(n,t)})}:i(n,t)}function i(n,t){var r={type:"Feature",id:t.id,properties:t.properties||{},geometry:u(n,t)};return null==t.id&&delete r.id,r}function u(n,t){function r(n,t){t.length&&t.pop();for(var r,e=s[0>n?~n:n],o=0,i=e.length;i>o;++o)t.push(r=e[o].slice()),a(r,o);0>n&&f(t,i)}function e(n){return n=n.slice(),a(n,0),n}function o(n){for(var t=[],e=0,o=n.length;o>e;++e)r(n[e],t);return t.length<2&&t.push(t[0].slice()),t}function i(n){for(var t=o(n);t.length<4;)t.push(t[0].slice());return t}function u(n){return n.map(i)}function c(n){var t=n.type;return"GeometryCollection"===t?{type:t,geometries:n.geometries.map(c)}:t in l?{type:t,coordinates:l[t](n)}:null}var a=v(n.transform),s=n.arcs,l={Point:function(n){return e(n.coordinates)},MultiPoint:function(n){return n.coordinates.map(e)},LineString:function(n){return o(n.arcs)},MultiLineString:function(n){return n.arcs.map(o)},Polygon:function(n){return u(n.arcs)},MultiPolygon:function(n){return n.arcs.map(u)}};return c(t)}function f(n,t){for(var r,e=n.length,o=e-t;o<--e;)r=n[o],n[o++]=n[e],n[e]=r}function c(n,t){for(var r=0,e=n.length;e>r;){var o=r+e>>>1;n[o]<t?r=o+1:e=o}return r}function a(n){function t(n,t){n.forEach(function(n){0>n&&(n=~n);var r=o[n];r?r.push(t):o[n]=[t]})}function r(n,r){n.forEach(function(n){t(n,r)})}function e(n,t){"GeometryCollection"===n.type?n.geometries.forEach(function(n){e(n,t)}):n.type in u&&u[n.type](n.arcs,t)}var o={},i=n.map(function(){return[]}),u={LineString:t,MultiLineString:r,Polygon:r,MultiPolygon:function(n,t){n.forEach(function(n){r(n,t)})}};n.forEach(e);for(var f in o)for(var a=o[f],s=a.length,l=0;s>l;++l)for(var h=l+1;s>h;++h){var p,g=a[l],v=a[h];(p=i[g])[f=c(p,v)]!==v&&p.splice(f,0,v),(p=i[v])[f=c(p,g)]!==g&&p.splice(f,0,g)}return i}function s(n,t){function r(n){i.remove(n),n[1][2]=t(n),i.push(n)}var e=v(n.transform),o=m(n.transform),i=g();return t||(t=h),n.arcs.forEach(function(n){for(var u,f,c=[],a=0,s=0,l=n.length;l>s;++s)f=n[s],e(n[s]=[f[0],f[1],1/0],s);for(var s=1,l=n.length-1;l>s;++s)u=n.slice(s-1,s+2),u[1][2]=t(u),c.push(u),i.push(u);for(var s=0,l=c.length;l>s;++s)u=c[s],u.previous=c[s-1],u.next=c[s+1];for(;u=i.pop();){var h=u.previous,p=u.next;u[1][2]<a?u[1][2]=a:a=u[1][2],h&&(h.next=p,h[2]=u[2],r(h)),p&&(p.previous=h,p[0]=u[0],r(p))}n.forEach(o)}),n}function l(n){for(var t,r=-1,e=n.length,o=n[e-1],i=0;++r<e;)t=o,o=n[r],i+=t[0]*o[1]-t[1]*o[0];return.5*i}function h(n){var t=n[0],r=n[1],e=n[2];return Math.abs((t[0]-e[0])*(r[1]-t[1])-(t[0]-r[0])*(e[1]-t[1]))}function p(n,t){return n[1][2]-t[1][2]}function g(){function n(n,t){for(;t>0;){var r=(t+1>>1)-1,o=e[r];if(p(n,o)>=0)break;e[o._=t]=o,e[n._=t=r]=n}}function t(n,t){for(;;){var r=t+1<<1,i=r-1,u=t,f=e[u];if(o>i&&p(e[i],f)<0&&(f=e[u=i]),o>r&&p(e[r],f)<0&&(f=e[u=r]),u===t)break;e[f._=t]=f,e[n._=t=u]=n}}var r={},e=[],o=0;return r.push=function(t){return n(e[t._=o]=t,o++),o},r.pop=function(){if(!(0>=o)){var n,r=e[0];return--o>0&&(n=e[o],t(e[n._=0]=n,0)),r}},r.remove=function(r){var i,u=r._;if(e[u]===r)return u!==--o&&(i=e[o],(p(i,r)<0?n:t)(e[i._=u]=i,u)),u},r}function v(n){if(!n)return y;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0),n[0]=(t+=n[0])*e+i,n[1]=(r+=n[1])*o+u}}function m(n){if(!n)return y;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0);var c=(n[0]-i)/e|0,a=(n[1]-u)/o|0;n[0]=c-t,n[1]=a-r,t=c,r=a}}function y(){}var d={version:"1.6.18",mesh:function(n){return u(n,r.apply(this,arguments))},meshArcs:r,merge:function(n){return u(n,e.apply(this,arguments))},mergeArcs:e,feature:o,neighbors:a,presimplify:s};"function"==typeof define&&define.amd?define(d):"object"==typeof module&&module.exports?module.exports=d:this.topojson=d}();

var margin = 0,
    width = parseInt(d3.select("#master_container").style("width")) - margin*2,
    height = width / 2;
    // height = parseInt(d3.select("#map_container").style("height")) - margin*2;

// var width = 960,
//     height = 600;


var projection = d3.geo.albersUsa();
      
var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map_container")
    .attr("width", width + margin*2)
    .attr("height", height + margin*2);

var radius2 = d3.scale.sqrt()
    .domain([0, 1000])
    .range([10, 25]);
    // .domain([0, 3000])
    // .range([5, 15]);    


var legend = svg.append("g")
    .attr("class", "legend")    
    .selectAll("g")
      .data([500, 2000, 5000])
      .enter().append("g");

// Pie chart parameters //first 4 colors are bluish and fossil/nuclear, last two are renewable. Add a diff for nuclear, tweak??
var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

var radius = 80;
var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(30);

var pie = d3.layout.pie()
    .sort(null)
    .value (function(d){  
    return d.value;   
      // if (d.value > 1) {
      //   return d.value;   
      // };

      //Trying to figure out a way to prune results.
    });
// d3.json("/sites/prod/files/us_10m_topo5.json", function(error, us) {
d3.json("js/us_10m_topo5.json", function(error, us) {
  if (error) return console.error(error);

  svg.selectAll(".state")
    .data(topojson.feature(us, us.objects.us_10m).features)
    .enter().append("path")
      .attr("class", function(d) {return "state " + d.id; });
      // .attr("d", path);

  svg.append("path")
    .datum(topojson.mesh(us, us.objects.us_10m, function(a,b) {return a !== b;}))
    .attr("class", "state-boundary");
    // .attr("d", path);

  svg.append("g")
    .attr("class", "bubbles")
  .selectAll("circle")
    .data(topojson.feature(us, us.objects.us_10m).features)
  .enter().append("circle")
    .attr("class", function(d) {
       var difference = (d.properties.total - d.properties.consumption)

          if (d.properties.total >= 0) {
            return "posB bubble"
          } else {
            return "negB bubble"
          };
      
    });    


    function resize() {
	    var width = parseInt(d3.select("#master_container").style("width")) - margin*2,
	    height = width / 2;    	
     	// width = $(window).width();

    // Smaller viewport
      if (width <= 800) {
        projection
          .scale(width * 1.2)
          .translate([width / 2, ((height / 2) + 45)])             
      } else if (width <= 900) {

        projection
          .scale(width * 1.2)
          .translate([width / 2, ((height / 2) + 30)])             
      } 
      // full viewport
      else {
        projection
          .scale(width)
          .translate([width / 2, ((height / 2) + 10)])   
      };

        var radius2 = d3.scale.sqrt()  
          .domain([0, 1000])
          .range([(2), (width / 45)]); 

      legend.append("circle")

      legend.append("text")
          .attr("dy", "1.3em")
          .text(d3.format(".1s"));

      // legend.append("text")
      //     .text("Btu")
      //     .attr("transform", "translate(" + (width - (radius2(10000) + 10)) + "," + (height - 10) + ")");

  legend        
    .attr("transform", "translate(" + (width - (radius2(10000) + 10)) + "," + (height - 10) + ")");

      legend.selectAll("circle")
        .attr("cy", function(d) { return -radius2(d); })
        .attr("r", radius2);

      legend.selectAll("text")
        .attr("y", function(d) { return -2 * radius2(d); }); 


    	svg.selectAll('path.state')
    		.attr("d", path);

    	svg.selectAll('path.state-boundary')
    		.attr("d", path);


    	svg.selectAll("circle.bubble")
    		.data(topojson.feature(us, us.objects.us_10m).features
          .sort(function(a, b) { return b.properties.total - a.properties.total; }))
        .attr("transform", function(d) { 
          return "translate(" + path.centroid(d) + ")"; })
        .attr("r", function(d) { 
          var difference = (d.properties.total - d.properties.consumption)
          // console.log(d.properties.name + ": " + difference);
          var abs_difference = Math.abs(difference);
          // console.log(abs_difference);

          return radius2(d.properties.total)


        })
        .attr("text", function(d){ return d.properties.name});

    }

    function tooltip(d) {     
      width = parseInt(d3.select("#master_container").style("width")) - margin*2,

      // Remove everything and start over.
      remover();
      
      var data = d;
      centroid = path.centroid(data);

      if (width > 900) {
        if (centroid[1] < 250) {
          centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]+25)];
        } else {
          centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]-(2 * radius + 80))];
        };        
      }
      else if (width > 700) {  
        if (centroid[1] < 225) {
          centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]+25)];
        } else {
          centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]-(2 * radius + 80))];
        };
      }
      else if (width > 480) {
        if (centroid[0] < width / 2) {
          centroid_adjusted = [(width - 175),(5)];        
        } else {
          centroid_adjusted = [(5),(5)];               
        };
      } else {
        if (centroid[0] < 200) {
          centroid_adjusted = [(width - 175),(5)];        
        } else {
          centroid_adjusted = [(5),(5)];               
        };
      };

        tip_text  = [(centroid_adjusted[0] + radius + 5),(centroid_adjusted[1] + 20)];
        tip_text2  = [(centroid_adjusted[0] + radius + 5),(centroid_adjusted[1] + 40)];
        pie_center = [(centroid_adjusted[0] + radius + 5),(centroid_adjusted[1]+(radius + 40))];
        tip_close = [(centroid_adjusted[0] + radius*2),(centroid_adjusted[1]+(15))];

// Create array for pie charts here!!!!!!!!!!!!!!!!!!!!!!! put in memory and use laterZZzzzZzzZzzzZZzzZZZz
      var data_array = [        
        {type: "Coal", value: data.properties.coal, x:centroid_adjusted[0], y:centroid_adjusted[1]},
        {type: "Crude", value: data.properties.crude, x:centroid_adjusted[0], y:centroid_adjusted[1]},
        {type: "Natural Gas", value: data.properties.nat_gas, x:centroid_adjusted[0], y:centroid_adjusted[1]},
        {type: "Nuclear", value: data.properties.nuclear, x:centroid_adjusted[0], y:centroid_adjusted[1]},
        {type: "Biofuels", value: data.properties.biofuels, x:centroid_adjusted[0], y:centroid_adjusted[1]},
        {type: "Other Renewable Energy", value: data.properties.o_renew, x:centroid_adjusted[0], y:centroid_adjusted[1]}];
        // {type: "t_renew", value: data.properties.t_renew}];    

      var tooltipContainer = svg.append("g")
        .attr("id", "tooltip")
      .append("rect")
        // .attr("id", "tooltip")
        .attr("transform", function() { 
          return "translate(" + centroid_adjusted + ")"; })
        .attr("width", (radius * 2 + 10))
        .attr("height", (radius * 2 + 65))
        .attr("rx", 6)
        .attr("ry", 6)
        // .attr("fill", "brown");

// tip title
      svg
        .append("text")
        .attr("class","tip-text")
        .text(function(d){
            return data.properties.name;
        })
        .attr("transform", function() { 
          return "translate(" + tip_text + ")"; });

      svg
        .append("text")
        .attr("class","tip-text2")
        .text(function(d){
            return "Total: " + data.properties.total + " Trillion Btu";
        })
        .attr("transform", function() { 
          return "translate(" + tip_text2 + ")"; });

      svg.append("g")
        .attr("class", "closer")
        .attr("transform", function(){
          return "translate(" + tip_close + ")";
        })
          .append("text")
          .attr("class", "tip-text2")
          .text("X").on("click", remover);



var tip_position = [(centroid_adjusted[0] + 85),(centroid_adjusted[1] + 205)];

      var toolbody = svg.append("text")
                      .attr("class","tip-text3")
                      .attr("transform", function() { 
                        return "translate(" + tip_position + ")"; });

          toolbody
            .append("tspan")
            .text("Hover over pie chart ")
            .attr("x",0)
            .attr("y",0);

          toolbody
            .append("tspan")
            .text("for more information")
            .attr("x",0)
            .attr("y",15);
          

// Pie chart

      var g = svg.selectAll(".arc")
          .data(pie(data_array))
        .enter().append("g")
          .attr("class", "arc")
          .attr("transform", function() { 
          return "translate(" + pie_center + ")"; });

      g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.type); });

      // g.append("text")
      //   .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      //   .attr("dy", ".35em")
      //   .style("text-anchor", "middle")
      //   .text(function(d) { return d.data.type; });

      // If its mobile????? move it to the bottom



    d3.selectAll("g.arc").on('mouseover', arctip);      
  }

    function arctip(d) { 
    d3.selectAll(".tip-text3").remove();
       
    var tip_data = d.data

    var tip_position = [(tip_data.x + 85),(tip_data.y + 205)];

       var toolbody = svg
        .append("text")
        .attr("class","tip-text3")
        .attr("transform", function() { 
          return "translate(" + tip_position + ")"; });

      toolbody.append("tspan")
        .text(function(d){
          return tip_data.type + ":"
        })
        .attr("x",0)
        .attr("y",0);

      toolbody.append("tspan")      
        .text(function(d){
            return tip_data.value + " Trillion Btu";
        })
        .attr("x",0)
        .attr("y",15);
      }
    // }        centroid_adjusted = [(centroid[0]-radius),(centroid[1]+25)];

    function remover() {
      d3.select("#tooltip").remove();
      d3.selectAll(".arc").remove();
      d3.selectAll(".tip-text").remove();
      d3.selectAll(".tip-text2").remove();        
      d3.selectAll(".tip-text3").remove();     
    }

    function clickMe(){alert("I've been clicked!")}



   	resize();
    d3.select(window).on('resize', resize); 
    d3.selectAll("circle.bubble").on('click', tooltip);
    // d3.selectAll(".closer")
    //   .selectAll('.tip-text2')
    //   .on('click', clickMe)

       // Doesn't work the below vvvv
    // d3.selectAll("g.arc").on('mouseout', function(){d3.selectAll(".tip-text2").remove();})

    // d3.select("#master_container").on('mouseover', function() {
    //   d3.select("#tooltip").remove();
    //   console.log('h')
    // })
    resize(); 
    // Need both resizes???????
	});

