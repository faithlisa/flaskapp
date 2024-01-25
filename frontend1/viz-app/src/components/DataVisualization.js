import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './DataVisualization.css';

const DataVisualization = ({ data }) => {
    const d3Container = useRef(null);
    const tooltip = d3.select("body").append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);
                      
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (data && d3Container.current) {
            if (typeof data === 'object' && !Array.isArray(data)) {
                let allData = [];
                Object.keys(data).forEach(year => {
                    allData = allData.concat(data[year]);
                });

                const svg = d3.select(d3Container.current);
                svg.html(""); 
                const margin = { top: 30, right: 60, bottom: 70, left: 40 },
                    width = 460 - margin.left - margin.right,
                    height = 400 - margin.top - margin.bottom;

                // Chart Title
                svg.attr("class", "d3-component")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

                const x = d3.scaleBand()
                    .range([0, width])
                    .domain(allData.map(d => d['STI Test Type']))
                    .padding(0.2);

                svg.append("g")
                    .attr("transform", `translate(0,${height})`)
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

                const y = d3.scaleLinear()
                    .domain([0, d3.max(allData, d => d['Number of STI Tests provided'])])
                    .range([height, 0]);
                
                svg.append("g")
                    .call(d3.axisLeft(y));

                const colorScale = d3.scaleSequential(d => d3.interpolateBlues(y(d['Number of STI Tests provided']) / height));

                svg.selectAll(".bar")
                    .data(allData)
                    .enter()
                    .append("rect")
                    .attr("class", "bar")
                    .attr("x", d => x(d['STI Test Type']))
                    .attr("width", x.bandwidth())
                    .attr("y", d => y(d['Number of STI Tests provided']))
                    .attr("height", d => height - y(d['Number of STI Tests provided']))
                    .attr("fill", d => colorScale(d['Number of STI Tests provided']))
                    .on("mouseover", function(event, d) {
                        tooltip.html(`STI Test Type: ${d['STI Test Type']}<br>Number of Tests: ${d['Number of STI Tests provided']}`)
                               .style("left", (event.pageX + 5) + "px")
                               .style("top", (event.pageY - 28) + "px")
                               .transition()
                               .duration(200)
                               .style("opacity", .9);
                    })
                    .on("mouseout", function(d) {
                        tooltip.transition()
                               .duration(500)
                               .style("opacity", 0);
                    })
                    .transition()
                    .duration(750);
            }
        }
    }, [data]);

    return (
        <svg
            className="d3-component"
            ref={d3Container}
        />
    );
};

export default DataVisualization;
