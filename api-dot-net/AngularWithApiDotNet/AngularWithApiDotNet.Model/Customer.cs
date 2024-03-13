namespace AngularWithApiDotNet.Model
{
    public class Customer
    {
        public int IdCustomer { get; set; }
        public string? Name { get; set; }
        public long CPF {get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}
