namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core;

	#region Class: DeleteWeekFirstDayRegionalFormatBased

	public class DeleteWeekFirstDayRegionalFormatBased : IInstallScriptExecutor
	{

		#region Fields: Private

		private readonly string _schemaName = "WeekFirstDay";
		private readonly Guid _recordId = new Guid("e6257269-7f7c-46a3-8431-e0119a9d88d4");

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			var entity = userConnection.EntitySchemaManager.GetEntityByName(_schemaName, userConnection);
			if (entity.FetchFromDB(_recordId)) {
				entity.Delete();
			}
		}

		#endregion

	}

	#endregion

}
