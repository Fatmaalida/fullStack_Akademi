namespace ff.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int OrderID { get; set; }
        public Order? Order { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.Now;
        public string? PaymentMethod { get; set; }
        public string? PaymentStatus { get; set; }
    }
}
