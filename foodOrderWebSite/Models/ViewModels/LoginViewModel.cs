using System.ComponentModel.DataAnnotations;

namespace ff.Models.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string? UserName { get; set; }

        [Required]

        public string? Password { get; set; }
    }
}
