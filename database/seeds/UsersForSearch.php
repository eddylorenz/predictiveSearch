<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersForSearch extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 = new User;
        $user2 = new User;
        $user3 = new User;

        $user1->name = 'firstNameA lastNameA';
        $user2->name = 'firstNameA lastNameB';
        $user3->name = 'firstNameB lastNameA';

        $user1->email = 'aa@mail.com';
        $user2->email = 'ab@mail.com';
        $user3->email = 'ba@mail.com';

        $user1->password = 'test1';
        $user2->password = 'test2';
        $user3->password = 'test3';

        $user1->save();
        $user2->save();
        $user3->save();
    }
}
