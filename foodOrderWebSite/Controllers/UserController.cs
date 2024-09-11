using ff.Data;
using ff.Models.ViewModels;
using ff.Models;
using Microsoft.AspNetCore.Mvc;

namespace ff.Controllers
{
    public class UserController : Controller
    {
        public readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }
        public IActionResult Login()
        {

            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
        //db bağlantısı olunca crud işlem yapılacak !
        [HttpPost]
        public IActionResult Register(RegisterViewModel registerModel)
        {
            var existingUser = _context.User.FirstOrDefault(u => u.Username == registerModel.UserName || u.Email == registerModel.Email);

            if (existingUser != null)
            {
                if (existingUser.Username == registerModel.UserName)
                {
                    ViewData["RegisterStatus"] = "false";
                    ViewData["RegisterMessage"] = "This username is already taken.";
                }
                else if (existingUser.Email == registerModel.Email)
                {
                    ViewData["RegisterStatus"] = "false";
                    ViewData["RegisterMessage"] = "This email is already in use.";
                }
                return View(registerModel);
            }
            var user = new User();
            user.Username = registerModel.UserName;
            user.Password = registerModel.Password;
            user.Email = registerModel.Email;
            user.CityId = registerModel.CityId;
            user.PhoneNumber = registerModel.PhoneNumber;
            try
            {
                _context.User.Add(user);
                var result = _context.SaveChanges();
                ViewData["RegisterStatus"] = "true";
                ViewData["RegisterMessage"] = "Register successful!";
                return RedirectToAction("Index", "Home");
            }
            catch
            {
                ViewData["RegisterStatus"] = "false";
                ViewData["RegisterMessage"] = "Register failed!";
            }
            return View(registerModel);
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel usermodel)
        {
            var users = CreateUserList();
            var user = users.FirstOrDefault(u => u.Username == usermodel.UserName && u.Password == usermodel.Password);

            if (user != null)
            {
                ViewData["Status"] = "true";
                ViewData["Message"] = "Login successful!";
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewData["Status"] = "false";
                ViewData["Message"] = "Invalid username or password!";
            }

            return View(usermodel);
        }
        public List<User> CreateUserList()
        {
            var userList = new List<User>
            {
                new User
                {
                    Id = 1,
                    Username = "user1",
                    Password = "password1",
                    CityId = 1,
                    Email = "user1@example.com",
                    PhoneNumber = "05311234567"
                },
                new User
                {
                    Id = 2,
                    Username = "user2",
                    Password = "password2",
                    CityId = 2,
                    Email = "user2@example.com",
                    PhoneNumber = "05317654321"
                },
                new User
                {
                    Id = 3,
                    Username = "user3",
                    Password = "password3",
                    CityId = 3,
                    Email = "user3@example.com",
                    PhoneNumber = "05319876543"
                }
            };

            return userList;
        }
    }
}
