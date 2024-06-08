import React, { useState, useEffect } from 'react';

function HomePage2() {
  const [data, setData] = useState([
    {
      make: 'Gibson',
      model: 'Les Paul',
      type: 'Electric',
      price: '$3,000',
      image: 'http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd'
    },
    {
      make: 'Gibson',
      model: 'SG',
      type: 'Electric',
      price: '$1,500',
      image: 'http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe'
    },
    {
      make: 'Fender',
      model: 'Telecaster',
      type: 'Electric',
      price: '$2,000',
      image: 'http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b'
    },
    {
      make: 'Fender',
      model: 'Stratocaster',
      type: 'Electric',
      price: '$2,000',
      image: 'http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9'
    },
    {
      make: 'Gretsch',
      model: 'White Falcon',
      type: 'Electric',
      price: '$5,000',
      image: 'http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e'
    },
    {
      make: 'Paul Reed Smith',
      model: 'Custom 24',
      type: 'Electric',
      price: '$5,000',
      image: 'http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763'
    },
    {
      make: 'Gibson',
      model: 'Hummingbird',
      type: 'Acoustic',
      price: '$2,500',
      image: 'http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea'
    }
  ]);

  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const makes = [...new Set(data.map(item => item.make))];
    console.log(makes ,"efewfer")
    const models = [...new Set(data.map(item => item.model))];
    const types = [...new Set(data.map(item => item.type))];



    setFilters({
      make: makes,
      model: models,
      type: types
    });
  }, [data]);

  const handleFilterChange = (filterName, filterVal) => {
    if (filterVal === '') {
      delete filters[filterName];
    } else {
      filters[filterName] = filterVal;
    }

    console.log(filters ,"adefbergver")

    setFilters({ ...filters });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();

    setData(
      data.filter(item => {
        const make = item.make.toLowerCase();
        const model = item.model.toLowerCase();
        const type = item.type.toLowerCase();

        return make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1;
      })
    );
  };

  console.log(data ,"eveevv")

  return (
    <div class="mx-auto p-4">
      <div id="search">
        <form id="search-form" onSubmit={handleSearchSubmit}>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
              <input
                type="text"
                placeholder="Search"
                class="block w-full pl-10 text-sm text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <button
                type="submit"
                class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div id="filter">
        <form>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <select
                data-filter="make"
                class="block w-full pl-10 text-sm text-gray-700"
                onChange={(e) => handleFilterChange("make", e.target.value)}
              >
                <option value="">Select Make</option>
                {filters?.make?.map((make, index) => (
                  <option key={index} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <select
                data-filter="model"
                class="block w-full pl-10 text-sm text-gray-700"
                onChange={(e) => handleFilterChange("model", e.target.value)}
              >
                <option value="">Select Model</option>

                {filters?.model?.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <select
                data-filter="type"
                class="block w-full pl-10 text-sm text-gray-700"
                onChange={(e) => handleFilterChange("type", e.target.value)}
              >
                <option value={`${typeof filters?.type== "string" ? filters?.type : "select type"}`}>
                  {typeof filters?.type== "string" ? filters?.type : "select type"}
                </option>

                {console.log(filters, "Aerffds" ,typeof filters?.type== "string")}

                {typeof filters?.type== "string" || filters?.type?.length >0 && (
                  <>
                    {filters?.type?.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
          </div>
        </form>
      </div>

      <div id="products">
        {data?.map((item, index) => (
          <div
            key={index}
            class="w-full md:w-1/3 xl:w-1/4 p-6"
            data-make={item.make}
            data-model={item.model}
            data-type={item.type}
            data-price={item.price.replace("$", "")}
          >
            <div class="text-center">
              <img src={item.image} />
              <br />
              Make: {item.make}
              <br />
              Model: {item.model}
              <br />
              Type: {item.type}
              <br />
              Price: {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage2;