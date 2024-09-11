using System.ComponentModel.DataAnnotations;

namespace ff.Models.ViewModels
{
    public class RegisterViewModel
    {

        [Required]
        public string? UserName { get; set; }

        public string? PhoneNumber { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

        public int CityId { get; set; }
        public City? City { get; set; }
    
}
}
