namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DeleteWeekFirstDayRegionalFormatBasedSchema

	/// <exclude/>
	public class DeleteWeekFirstDayRegionalFormatBasedSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DeleteWeekFirstDayRegionalFormatBasedSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DeleteWeekFirstDayRegionalFormatBasedSchema(DeleteWeekFirstDayRegionalFormatBasedSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("50a38718-1c3e-4188-9cc4-e0e0669a0bfe");
			Name = "DeleteWeekFirstDayRegionalFormatBased";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2c3f70d-d3a5-4d15-9bc6-62f67312edb1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,145,79,79,2,49,16,197,207,75,226,119,104,240,178,36,66,68,145,191,241,2,184,134,3,198,136,198,35,25,219,1,26,119,91,50,237,162,27,194,119,183,219,34,1,195,193,75,147,121,211,215,249,245,141,130,12,205,26,56,178,87,36,2,163,23,182,49,210,106,33,151,57,129,149,90,93,84,182,23,149,40,55,82,45,217,172,48,22,179,193,161,62,182,16,58,221,117,46,9,151,206,198,70,41,24,211,103,99,76,209,226,59,226,103,34,201,216,49,20,47,190,15,105,162,41,3,59,4,131,194,27,215,249,71,42,57,227,165,239,127,54,214,103,147,137,50,22,210,116,198,73,174,237,195,55,242,220,106,114,175,109,253,155,7,154,68,98,42,28,206,51,201,13,88,12,205,117,40,24,33,8,173,210,130,25,75,229,183,230,134,175,48,131,39,23,13,187,103,213,99,138,234,224,172,241,49,151,130,205,9,185,38,49,17,206,164,240,203,139,113,21,219,55,119,157,155,118,175,222,89,116,120,189,213,134,219,122,183,117,219,172,227,117,179,217,131,158,232,118,69,171,90,27,236,113,81,137,64,124,138,63,69,187,210,158,223,135,180,199,15,129,109,180,155,29,126,142,241,155,65,114,235,83,200,203,221,177,252,164,172,177,114,149,81,180,1,98,168,172,180,133,35,61,189,210,120,240,250,204,7,48,5,5,75,164,198,35,218,32,15,139,50,147,248,40,159,171,191,35,124,62,145,92,176,56,76,104,36,104,249,42,33,157,141,135,241,33,161,218,47,74,180,191,21,246,29,239,237,187,242,220,157,141,36,168,167,226,238,7,114,224,225,149,197,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("50a38718-1c3e-4188-9cc4-e0e0669a0bfe"));
		}

		#endregion

	}

	#endregion

}

