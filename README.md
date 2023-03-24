# Social Network API

## Description

This is an API for a social-network-style application, utilizing Express.js, MongoDB, and the Mongoose ODM. It includes CRUD methods for 'users' and 'thoughts', as well as the ability for a user to add/remove other users from a list of 'friends' and the ability to create and delete 'reactions' to other users' 'thoughts.' Currently, there are two bugs that I know of: I was unable to push new thoughts' id's to their associated users' 'thoughts' array fields, and there seems to be an issue with deleting reactions. Given more time and a second set of eyes, I'm sure these issues could be resolved quickly.

Note: certain files were pulled from class activities, particularly ones that don't require many changes across apps (e.g. config/connection.js, the index.js file in the root directory, and the format_date helper in the utils folder). Other files (specifically those in the controllers, models, and routes folders) do draw heavily from code we covered in class activities, but have been tailored to fit the specific aims of this challenge.

## Usage

A demonstration of this code can be found at the following link:
https://drive.google.com/file/d/1EfUJJ47OwehSFFy-Jhr32K84wrbj-G2c/view?usp=sharing

## License

MIT License

Copyright (c) 2023 jmulcahy92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.