﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateUseNewShellPositionSchema

	/// <exclude/>
	public class UpdateUseNewShellPositionSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateUseNewShellPositionSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateUseNewShellPositionSchema(UpdateUseNewShellPositionSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45862b43-54b0-486e-b058-9be564368f2a");
			Name = "UpdateUseNewShellPosition";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,84,219,110,155,64,16,125,38,82,254,97,197,19,72,6,1,54,38,110,234,74,220,28,241,82,69,117,147,62,70,27,152,36,72,203,66,119,151,196,86,228,127,239,114,243,133,92,42,85,42,18,130,157,221,57,115,230,112,6,138,11,224,21,78,1,253,4,198,48,47,31,132,25,150,244,33,127,172,25,22,121,73,207,207,94,207,207,148,154,231,244,17,173,183,92,64,113,57,90,155,17,22,248,16,60,198,41,138,146,190,191,195,224,163,184,25,5,114,75,110,86,245,61,201,83,148,18,204,57,186,169,50,44,224,134,195,119,120,89,63,1,33,215,37,207,27,126,232,11,74,18,202,5,38,100,157,178,188,18,241,6,210,90,148,76,34,188,182,56,74,197,242,103,153,140,24,224,172,164,100,139,174,234,60,67,119,245,1,44,201,208,178,141,154,215,152,113,208,212,56,178,130,69,24,89,70,224,71,190,49,139,22,43,35,152,59,161,17,91,115,107,238,58,206,226,194,117,85,253,242,19,116,201,39,222,8,96,20,19,201,154,241,81,1,207,177,2,207,179,37,162,231,123,198,108,53,181,141,69,184,10,12,215,9,35,199,14,167,222,116,177,250,123,129,162,34,229,22,96,12,238,59,11,127,26,248,174,49,11,172,200,136,98,91,130,251,174,109,88,150,107,185,243,208,146,215,197,71,224,57,21,232,174,192,155,189,190,75,228,216,51,111,118,49,157,207,188,203,83,65,159,75,73,164,251,50,195,113,173,105,86,26,136,66,218,102,215,39,203,73,199,157,65,90,178,44,201,38,109,181,170,79,213,81,227,52,69,121,198,12,213,45,168,172,77,225,165,175,160,141,161,84,105,191,53,8,33,45,196,111,49,169,65,213,219,124,197,148,81,77,29,24,169,19,20,150,164,46,104,163,142,116,187,252,38,218,190,228,144,241,235,9,152,20,46,201,84,221,76,120,252,187,198,68,123,147,53,208,214,59,233,148,142,164,217,25,14,180,46,186,235,37,234,204,219,42,52,28,248,84,154,227,238,57,16,25,236,187,95,183,139,81,247,186,185,98,101,161,189,35,129,233,115,25,94,223,238,197,232,218,232,98,82,180,166,197,247,119,36,150,159,21,57,189,161,185,56,58,213,75,115,56,52,20,252,92,172,211,241,210,117,132,121,223,74,47,94,59,250,90,20,12,243,138,178,251,253,235,114,36,142,25,83,94,51,136,130,67,72,211,7,197,6,168,164,249,15,253,144,62,6,134,26,136,78,197,225,243,116,27,218,161,200,33,95,121,121,202,9,32,141,153,205,161,35,96,69,201,31,154,240,21,136,174,191,86,227,175,141,135,191,105,111,244,66,203,229,219,177,63,194,82,70,147,50,246,243,71,117,26,236,201,201,76,246,254,147,215,14,1,225,128,254,137,230,240,243,248,47,20,145,129,236,35,154,253,75,255,236,30,187,126,92,154,123,247,7,142,22,214,199,136,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45862b43-54b0-486e-b058-9be564368f2a"));
		}

		#endregion

	}

	#endregion

}
