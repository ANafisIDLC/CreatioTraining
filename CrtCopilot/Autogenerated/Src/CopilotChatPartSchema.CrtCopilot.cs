namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotChatPartSchema

	/// <exclude/>
	public class CopilotChatPartSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotChatPartSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotChatPartSchema(CopilotChatPartSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7ed79dd2-49c8-4c98-bc9b-f91b45c48c5d");
			Name = "CopilotChatPart";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,82,193,110,194,48,12,61,23,137,127,136,224,2,18,226,3,232,216,133,77,187,140,9,141,221,38,14,33,152,18,169,77,170,216,61,108,136,127,159,19,10,180,17,160,237,176,75,148,216,207,207,246,123,49,178,0,44,165,2,241,1,206,73,180,91,26,207,172,217,234,172,114,146,180,53,252,42,117,110,169,219,217,119,59,73,133,218,100,98,249,133,4,5,103,242,28,148,7,225,248,5,12,56,173,210,24,243,94,25,210,5,140,151,156,149,185,254,14,156,140,98,220,231,147,36,201,189,200,73,69,43,14,148,213,58,215,74,168,92,34,138,186,237,108,39,105,33,29,183,79,246,161,42,233,59,200,152,131,1,6,201,85,138,172,195,137,88,132,218,35,162,230,137,24,6,67,225,55,72,14,119,65,175,26,233,161,14,206,1,81,102,240,40,138,227,5,71,39,248,146,3,126,6,213,122,214,13,146,186,14,197,244,92,153,134,68,84,61,141,234,211,255,29,111,36,88,47,111,13,27,109,93,93,61,10,131,37,205,204,204,110,96,40,38,130,118,26,7,23,238,235,187,62,55,184,120,161,38,117,122,1,120,202,83,214,223,155,155,246,193,108,142,150,182,253,93,56,91,130,35,13,145,187,225,219,204,161,88,131,27,188,241,239,101,222,222,105,202,222,112,213,16,239,170,88,103,115,246,34,3,74,5,250,227,112,155,186,189,118,187,65,36,119,244,252,101,131,166,100,109,250,218,148,150,196,127,33,245,74,223,102,12,158,92,161,139,252,8,81,62,126,0,97,235,126,243,41,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7ed79dd2-49c8-4c98-bc9b-f91b45c48c5d"));
		}

		#endregion

	}

	#endregion

}

