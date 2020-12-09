
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { sex: 'female', profile_image: 'w1', name: 'Jessica' },
        { sex: 'female', profile_image: 'w2', name: 'Elizabeth' },
        { sex: 'female', profile_image: 'w3', name: 'Sara' },
        { sex: 'female', profile_image: 'w4', name: 'Cat' },
        { sex: 'female', profile_image: 'w5', name: 'Alicia' },
        { sex: 'female', profile_image: 'w6', name: 'Kim' },
        { sex: 'female', profile_image: 'w7', name: 'Ani'},
        { sex: 'female', profile_image: 'w8', name: 'Samantha' },
        { sex: 'female', profile_image: 'w9', name: 'Jeny' },
        { sex: 'female', profile_image: 'w10', name: 'Cindy' },
        { sex: 'female', profile_image: 'w11', name: 'Alice' },
        { sex: 'female', profile_image: 'w12', name: 'lucy' },
        { sex: 'female', profile_image: 'x1', name: 'Amy' },
        { sex: 'female', profile_image: 'x2', name: 'Hannah' },
      ]);
    });
};
